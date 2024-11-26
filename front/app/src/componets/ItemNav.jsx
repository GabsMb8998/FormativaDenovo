import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


export function ItemNav({url, Icons, open, label, selected, onClick, setSelected} ){

    const navigate = useNavigate()
    console.log(selected, 'selecionado')

    return(

        <>

        <div className="relative">

            <div className={`${selected ? '': 'hidden'} bg-white h-full w-1 absolute -left-5`}></div>    

                <div className={ ` ${open ? 'justify-start w-full' : 'justify-center'} flex items-center gap-x-7 hover:bg-hover-nav rounded-lg  p-3`} 
                onClick={()=>{
                    navigate(`/${url}`)
                    // setSelected({label})
                    onClick()
                    }}>
                {Icons}   
                <p className={` ${open ? 'block': 'hidden'} ${selected ? 'text-white': 'text-font-nav'}  font-medium text-xl`} >{label}</p>

                </div>
            
        </div>
        </>

    )
}