import "../index.css"
import { useNavigate } from "react-router-dom"

export function HomeCard({icon, label}){

    const navigate = useNavigate()

    return(
        <div className="bg-fundo hover:bg-[#454545] hover:scale-105 duration-300 shadow-card-home  flex flex-col justify-between lg:w-[21rem] lg:h-[26rem] p-4 sm:p-5 sm:w-[15rem] sm:h-[20rem] w-[10rem] h-[15rem]"
          onClick={()=>{
            if (label ==='data'){
                console.log('label')
                navigate('/tabledados')
            }else {
                navigate('/dashboard')
            }
          }}>

            <div>
                <img src={icon} alt="" />
            </div>

            <div>
                <p className="text-[#DADADA] hover:text-[#E0E0E0] text-xl">{label}</p>
            </div>
        </div>
    )
}