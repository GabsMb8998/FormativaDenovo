import { useState } from "react"
import NavTable from "../componets/NavTable"
import { TituloOficial } from "../componets/TituloOficial"
import { HomeCard } from "../componets/HomeCard"

import '../index.css'


import iconData from "../imgs/icon-data.svg"
import iconDashboard from "../imgs/imgs-nav/icon-dashboard.svg"

export function Home(){

    const [user, setUser] = useState("gabi")



    return(
        <div className="flex">

            <NavTable/>

            <main className="bg-fundo w-full h-screen px-20 py-20">
                <TituloOficial titulo={'Home'}/> 
                <h2 className="text-[#949494] text-3xl mt-3">Welcome {user}</h2>

                <div className="flex gap-x-32 my-32 justify-center">
                    <HomeCard label='data' icon={iconData}/>
                    <HomeCard label='Dashbord' icon={iconDashboard}/>
                </div>
            </main>
        </div>
    )
}