import { useState } from "react"
import NavTable from "../componets/NavTable"
import { TituloOficial } from "../componets/TituloOficial"
import { HomeCard } from "../componets/HomeCard"

import '../index.css'


import iconData from "../imgs/icon-data.svg"
import iconDashboard from "../imgs/imgs-nav/icon-dashboard.svg"
import { NavMobile } from "../componets/mobile/NavMobile"
import { HeaderMobile } from "../componets/mobile/HeaderMobile"

export function Home(){

    const [user, setUser] = useState("gabi")
    // const [selected, setSelected] = useState('home')



    return(
        <div className="flex flex-col lg:flex-row bg-fundo overflow-y-hidden h-screen">
            <NavTable selected={'home'}/>

            <HeaderMobile/>
            <main className=" w-full lg:h-screen lg:px-20 lg:py-20 p-5 sm-20 lg:m-0">

                <div className="px-5 lg:px-28">
                    <TituloOficial titulo={'Home'}/> 
                    <h2 className="text-[#949494] lg:text-3xl text-2xl lg:mt-3">Welcome {user}</h2>
                </div>

                <div className="flex lg:gap-x-32 gap-x-7 lg:my-32 my-20 justify-center">
                    <HomeCard label='data' icon={iconData}/>
                    <HomeCard label='Dashbord' icon={iconDashboard}/>
                </div>
            </main>

            <NavMobile selected={'home'}/>
        </div>
    )
}