import "./index.css"


// imgs 
import logo from "./imgs/logo.gif"
import patinho from "./imgs/patinho.mp4"
import banguela from "./imgs/banguela.mp4"

import buttonPlay from "./imgs/icon-play.svg"
import buttonPause from "./imgs/icon-pause.svg"

import { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Titulo from "./componets/Titulo"
import { InputLogin } from "./componets/InputLogin"
import { LoginCadastro } from "./componets/LoginCadastro"


function App(){

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [login, setLogin] = useState(true)

  const [token, setToken]= useState('')
  const [isPlayingLogin, setIsPlayingLogin] = useState(false)
  const [isPlayingCadaster, setIsPlayingCadaster] = useState(false)
  const videoRef = useRef(null)
  const videoCadasterRef = useRef(null)

  const navigate = useNavigate()

  function pegarToken(user, password){
    fetch("http://127.0.0.1:8000/api/token/",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: user,
        password: password
      })

    }).then(response=>{
      if (!response.ok) {
        throw new Error('Network response was not ok',user);
      }
      return response.json()
    }
    )
    .then(data=>{
      setToken(data.access)
      console.log(data.access)
      localStorage.setItem('token', data.access)
    })    
    // if (token!==''){
    //   navigate("/tabledados")
    // }else {
    //   console.error();  
    // }
  }

  
  function cadastro(){
    fetch("http://127.0.0.1:8000/api/create_user/",{
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username: user,
            password: password
          })
    }).then(response=>{
        console.log(response)
        pegarToken(user,password)

    })
}
  
// logica do botao de play dos videos 
  function tocar(login){

    if (login){
      if(videoRef.current.paused){
        videoRef.current.play()
        setIsPlayingLogin(true)
      }else{
        videoRef.current.pause()
        setIsPlayingLogin(false)
      }
    }else {
      if(videoCadasterRef.current.paused){
        videoCadasterRef.current.play()
        setIsPlayingCadaster(true)
      }else{
        videoCadasterRef.current.pause()
        setIsPlayingCadaster(false)
    }
  }
}

useEffect(()=>{
    if(token !== ''){
      navigate("/home")
    }
    console.log(token)
},[token])

// impede que um fique tocando enquanto esta em outra pagina
useEffect(()=>{
  if(login && isPlayingCadaster){
    videoCadasterRef.current.pause()
    setIsPlayingCadaster(false)
  }

  if (!login && isPlayingLogin){
    videoRef.current.pause()
    setIsPlayingLogin(false)
  }
},[login])

  return(

    <div className="flex h-screen bg-fundo overflow-y-hidden" > 

    {/* div que move  */}
    <div className={`duration-300 ease-in-out bg-[#242424] lg:w-2/4 w-full h-screen absolute hidden xl:block ${login ? 'translate-x-full' : 'translate-x-0'} `}></div>

      {/* lado do login  */}
        <div className=" lg:w-2/4 h-screen flex justify-center items-center flex-col ">

          <video ref={videoRef} autoPlay loop className={`${login ? 'flex' : 'hidden'} h-4/6 mt-8 rounded-lg absolute -right-28 -top-60 opacity-50 scale-[2] lg:opacity-100  lg:scale-75 xl:static xl:opacity-100 ` }>
                <source src={patinho} type="video/mp4" />
          </video>

          <button className={`${login ? 'block': 'hidden'} absolute  bottom-5 left-5`}
          onClick={()=>tocar(login)}>
            <img src={isPlayingLogin ? buttonPause : buttonPlay} alt="" />
          </button>

          <div className={`${login ? 'hidden': 'lg:p-1 lg:pt-1 '} relative h-full flex flex-col w-full`}>  
              <LoginCadastro login={login} pagina={'cadastro'} setLogin={setLogin} cadastro={cadastro} user={user} setUser={setUser} password={password} setPassword={setPassword} pegarToken={pegarToken}/>
          </div>

        </div>

      {/* lado do cadastro */}
        <div  className="bg-fundo lg:w-2/4  justify-center items-center w-full flex my-auto">

        <button className={`${login ? 'hidden': 'block'} absolute  bottom-5 right-5 xl:relative xl:right-0 xl:bottom-0`}
          onClick={()=>tocar(login)}>
            <img src={isPlayingCadaster ? buttonPause : buttonPlay} alt="" />
          </button>

          <video ref={videoCadasterRef} autoPlay loop className={`${login ? 'hidden' : 'flex'}  h-4/6 mt-8 rounded-l scale-125`}>
                  <source src={banguela} type="video/mp4" />
            </video>

            <div className={`${login ? '': 'hidden'} relative h-full flex flex-col `}>  
                <LoginCadastro login={login} pagina={'login'} setLogin={setLogin} pegarToken={pegarToken} setUser={setUser} setPassword={setPassword} user={user} password={password} />
            </div>
        </div>

      </div>
    
  )
}
export default App



