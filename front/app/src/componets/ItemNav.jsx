import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


export function ItemNav({url, Icons, open, label, selected, onClick, setSelected, nav} ){

    const navigate = useNavigate()
    console.log(selected, 'selecionado')

    return(
        <>
        <div className="relative">

            <div className={`${selected ? '': 'hidden'}  ${nav ==='mobile' ? 'w-full h-1 -bottom-3' : ' h-full w-1 -left-5'} bg-white absolute `}></div>    

                <div className={ ` ${open ? 'justify-start w-full' : 'justify-center'} flex items-center gap-x-7 hover:bg-hover-nav rounded-lg  p-3`} 
                onClick={onClick}>
                {Icons}   
                <p className={` ${open ? 'block': 'hidden'} ${selected ? 'text-white': 'text-font-nav'} ${nav ==='mobile' ? 'hidden' : 'block'} font-medium text-xl`} >{label}</p>
                </div>
        </div>
        </>

    )
}