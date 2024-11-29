import { IconDash } from "../icons/IconDash"
import { IconHome } from "../icons/iconHome"
import { IconData } from "../icons/IconData"

import { useNavigate } from "react-router-dom"
import { ItemNav } from "../ItemNav"
export function NavMobile({ page, selected}){
    const navigate = useNavigate()

    const changeSideBar = (element) =>{
        // setSelected(element)
    }
    return(
        <nav className={`${page === 'table'? 'xl:hidden' : 'flex'} bg-[#242424] w-full h-12 flex xl:hidden justify-center sm:gap-x-20 gap-x-10 py-10 items-center absolute bottom-0`}>

            <ItemNav 
            Icons={<IconHome fill={selected =='home'? '#F3F3F3' : '#606060'} />}
            onClick={()=>navigate('/home')}
            url={'home'}
            open={open}
            label='Home'
            selected={selected === 'home'}
            nav={'mobile'}
            />

            <ItemNav
            Icons={<IconDash fill={selected =='dashboard'? '#F3F3F3' : '#606060'}/>}
            url={'dashboard'}
            open={open} label='Dasboard'
            onClick={()=>navigate('/dashboard')}
            selected={selected === 'dashboard'}
            nav={'mobile'}
            />  

            <ItemNav
            Icons={<IconData fill={selected =='data'? '#F3F3F3' : '#606060'}/>} 
            url={'tabledados'} 
            open={open} 
            label='Data' 
            onClick={()=>navigate('/tabledados')}
            selected={selected === 'data'}
            nav={'mobile'}
            />  

        </nav>
    )    
}
