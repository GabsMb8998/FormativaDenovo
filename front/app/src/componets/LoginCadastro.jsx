import { InputLogin } from "./InputLogin"

import "../index.css"

import iconUser from "../imgs/icon-user.svg"
import iconPassword from "../imgs/icon-password.svg"

export function LoginCadastro({pagina, login, setLogin, pegarToken, setUser, setPassword, user, password, cadastro} ){
    return(
        
      <div className="bg-[#] lg:fundo-login w-full lg:h-screen relative">

        <div className={`${login ? 'lg:p-32 lg:pt-48 ' : "pl-32"}   relative lg:h-full flex flex-col `}>
        
            <h2 className="text-regular text-white text-4xl">{pagina}</h2>

            <div className="flex flex-col gap-y-20 mt-28">
                <InputLogin tipo={'user'} icon={iconUser} setUser={setUser} user={user}/>

                <InputLogin tipo={'password'} icon={iconPassword} setPassword={setPassword} password={password}
                               
                />
            </div>

            <div className="mt-8">
                <p className="text-[#B0B0B0] text-sm font-light">{login ? "Don't have account?" : "Have account? "}<span className="text-white font-normal ml-1"
                onClick={()=>{
                    console.log(login)
                    if (login){
                        setLogin(false)
                    }else{
                        setLogin(true)
                    }
                    
                   }}>Click here</span></p>
            </div>

            <div className=" mt-32">
                <button 
                onClick={()=>{
                    pegarToken(user, password)
                    if (pagina !== 'login'){
                        cadastro()
                    }

                }}
                className="bg-[#1A1919] text-white py-5 px-24 font-medium hover:scale-105 duration-100">{login ? "Entrar" : "Cadastrar"}</button>
            </div>

         
        </div>

    </div>
    )
}