import banguela from "../imgs/banguela.mp4"
import Titulo from "../componets/Titulo"
import logo from "../imgs/logo.gif"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Cadaster(){

    const  [createUser, SetCreateUser] = useState("")
    const  [createPassoword, SetCreatePassoword] = useState("")

    const navigate = useNavigate()

    const cadaster = ()=>{
        fetch("http://127.0.0.1:8000/api/create_user/",{
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                username: createUser,
                password: createPassoword
              })
        }).then(response=>{
            console.log(response)
        })
    }

    return (
        <div className="flex">
            <div className="w-2/4 flex items-start justify-center">

                <video
                    autoPlay 
                    loop>
                    <source src={banguela} type="video/mp4" />
                </video>
            </div>

        <div className="flex flex-col w-2/4 h-screen mr-80 mt-52">
          <div>
            <div className="flex justify-center">
                <img
                className="w-48"
                src={logo} />
              
            </div>

          <Titulo
          titulo = "Cadaster"
          />

          </div>

          <div>

          <div>
                <div className="flex flex-col gap-y-6 mt-24">

                <input 
                className="input-login py-4 px-6 rounded w-3/5 self-center"
                type="text" placeholder="Name:"
                onChange={(e)=>{SetCreateUser(e.target.value)}}/>

                <input
                className="input-login py-4 px-6 rounded w-3/5 self-center"
                type="password" placeholder="Passoword:"
                onChange={(e)=>{SetCreatePassoword(e.target.value)}}/>

                </div>

                <div className="text-center mt-12">
                    <div>
                        <button onClick={cadaster} className="font-semibold button-login py-3 px-14 rounded text-xl">Create account</button>
                    </div>

                    <div className="mt-6">
                    <a>Don't have account<span onClick={()=>navigate("/login")}  className="color-green"> click here</span></a>
                    
                    </div>
                </div>
            </div>
        </div>
        </div>
      </div>
    )
}

export default Cadaster