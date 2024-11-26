import "../index.css"

export function InputLogin({tipo, icon, setPassword, setUser, user, password}){
    return (

        <div className={`relative flex h-full`}>
            <img src={icon} className={`${tipo ==='password' ? '' : ""} absolute bottom-2 left-1 scale-75`} />
            <input className="bg-transparent focus:border-none borda-input-login w-2/4 pl-12 py-2 placeholder:text-[#BCBCBC] placeholder:font-light text-white"
             type={tipo === 'user' ? 'text' : 'password'} placeholder={tipo === 'user' ? 'username' : 'password'}
             value={tipo === 'password' ? password : user}
             onChange={(e)=>{
                if(tipo==='password'){
                    setPassword(e.target.value)
                }else {
                    setUser(e.target.value)
                }
             }}
             />
        </div>
    )
}