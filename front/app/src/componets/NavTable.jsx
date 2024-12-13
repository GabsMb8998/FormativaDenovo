import "../index.css"
import iconTemperatura from "../imgs/icon-temperatura.svg"

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Table from "../componets/Table"

// imgs 
import { IconBack } from "./icons/iconBack"
import {IconHome}  from "./icons/iconHome"
import { IconDash } from "./icons/IconDash"
import { IconData } from "./icons/IconData"
// import iconOpenSideBar from "../imgs/imgs-nav/open-side-bar.svg"
// import iconHome from "../imgs/imgs-nav/icon-home.svg"
// import iconDash from "../imgs/imgs-nav/icon-dashboard.svg"
// import iconData from "../imgs/imgs-nav/icon-data.svg"
import iconSettings from "../imgs/imgs-nav/icon-settings.svg"
import iconLogOut from "../imgs/imgs-nav/icon-log-out.svg"

import "../index.css"
import { ItemNav } from "./ItemNav"
import { NavMobile } from "./mobile/NavMobile"
// import { IconDash } from "./icons/IconDash"

function NavTable({ page, selected}){

    const [open, setOpen] = useState(false)
    const navigate = useNavigate()
    // const [selected, setSelected] = useState('home')

    const openSideBar = ()=>{
        if (!open){
            setOpen(true)
        }else {
            setOpen(false)
        }
    }
    console.log(page, 'pagee')

    const changeSideBar = (element) =>{
        // setSelected(element)
    }
    console.log(selected, 'selected')

    return(
                <aside className={` ${open ? 'w-64 items-start px-8 ' : 'w-24  items-center '} ${page === 'table' ? 'xl:flex' : 'hidden' } bg-[#242424] h-screen duration-200  flex-col hidden xl:flex fixed`} >
                    
                    <div onClick={()=>openSideBar()} className={`mt-20 flex gap-x-7`}>
                        <div className={`${open && 'left-52'} absolute`}>
                            <IconBack open={open} />
                        </div>
                    </div>

                    <div className={`${open ? 'items-start' : 'items-center'} flex flex-col gap-y-14 mt-56 w-full`}>

                        <ItemNav 
                        Icons={<IconHome fill={selected =='home'? '#F3F3F3' : '#606060'} />}
                        onClick={()=>navigate('/home')}
                        url={'home'}
                        open={open}
                        label='Home'
                        selected={selected === 'home'}
                        />

                        <ItemNav
                        Icons={<IconDash fill={selected =='dashboard'? '#F3F3F3' : '#606060'}/>}
                        url={'dashboard'}
                        open={open} label='Dasboard'
                        onClick={()=>navigate('/dashboard')}
                        selected={selected === 'dashboard'}
                        />  

                        <ItemNav
                        Icons={<IconData fill={selected =='data'? '#F3F3F3' : '#606060'}/>} 
                        url={'tabledados'} 
                        open={open} 
                        label='Data' 
                        onClick={()=>navigate('/tabledados')}
                        selected={selected === 'data'}
                       />  

                    </div>

                    <div className={`absolute bottom-20 gap-y-7 flex flex-col w-full ${open ? 'items-start' : 'items-center'} `}>

                        <div className={`${open ? 'justify-start w-full' : 'justify-center'}   flex items-center gap-x-7 hover:bg-hover-nav rounded-lg  p-3 cursor-pointer`}>
                            <img src={iconSettings} alt="" />
                            <p className={` ${open ? 'block': 'hidden'} text-font-nav font-medium text-xl`}>Settings</p>
                        </div>

                        <div className={`${open ? 'justify-start w-full' : 'justify-center'}   flex items-center gap-x-7 hover:bg-hover-nav rounded-lg  p-3 cursor-pointer`}>
                            <img src={iconLogOut} alt="" />
                            <p className={` ${open ? 'block': 'hidden'} text-font-nav font-medium text-xl`}>Log-out</p>
                        </div>
                    </div>

                    {/* <NavMobile selected={selected} setSelected={setSelected}/> */}

                </aside>
    )
}

export default NavTable

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { IconBack } from "./icons/iconBack"
// import { IconHome } from "./icons/iconHome";
// import { IconDash } from "./icons/IconDash";
// import { IconData } from "./icons/IconData";
// import { ItemNav } from "./ItemNav";
// import iconSettings from "../imgs/imgs-nav/icon-settings.svg";
// import iconLogOut from "../imgs/imgs-nav/icon-log-out.svg";

// function NavTable() {
//     const [open, setOpen] = useState(false);
//     const [selected, setSelected] = useState("home");
//     const navigate = useNavigate();

//     const openSideBar = () => setOpen((prev) => !prev);

//     // Função para alterar o estado de seleção
//     const handleSelect = (element) => {
//         setSelected(element);
//     };

//     return (
//         <aside
//             className={`${
//                 open ? "w-64 items-start px-8" : "w-24 items-center"
//             } bg-[#242424] h-screen duration-200 flex flex-col relative`}
//         >
//             <div onClick={openSideBar} className="mt-20 flex gap-x-7">
//                 <div className={`${open && "left-52"} absolute`}>
//                     <IconBack open={open} />
//                 </div>
//             </div>

//             <div className={`${open ? "items-start" : "items-center"} flex flex-col gap-y-14 mt-32 w-full`}>
//                 <ItemNav
//                     Icons={<IconHome fill={selected === "home" ? "#F3F3F3" : "#606060"} />}
//                     url={"home"}
//                     open={open}
//                     label="Home"
//                     onClick={() => handleSelect("home")}
//                     selected={selected === "home"}
//                 />
//                 <ItemNav
//                     Icons={<IconDash fill={selected === "dashboard" ? "#F3F3F3" : "#606060"} />}
//                     url={"dashboard"}
//                     open={open}
//                     label="Dashboard"
//                     onClick={() => handleSelect("dashboard")}
//                     selected={selected === "dashboard"}
//                 />
//                 <ItemNav
//                     Icons={<IconData fill={selected === "data" ? "#F3F3F3" : "#606060"} />}
//                     url={"tabledados"}
//                     open={open}
//                     label="Data"
//                     onClick={() => handleSelect("data")}
//                     selected={selected === "data"}
//                 />
//             </div>

//             <div className={`mt-36 gap-y-7 flex flex-col w-full ${open ? "items-start" : "items-center"}`}>
//                 <div className="flex items-center gap-x-7 hover:bg-hover-nav rounded-lg p-3 cursor-pointer">
//                     <img src={iconSettings} alt="" />
//                     <p className={`${open ? "block" : "hidden"} text-font-nav font-medium text-xl`}>Settings</p>
//                 </div>

//                 <div className="flex items-center gap-x-7 hover:bg-hover-nav rounded-lg p-3 cursor-pointer">
//                     <img src={iconLogOut} alt="" />
//                     <p className={`${open ? "block" : "hidden"} text-font-nav font-medium text-xl`}>Log-out</p>
//                 </div>
//             </div>
//         </aside>
//     );
// }

// export default NavTable;
