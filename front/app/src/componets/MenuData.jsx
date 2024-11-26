function MenuData({label, selected, onClick }){
    return(
        <li onClick={onClick} className=" flex flex-col items-center">
            <p className={` ${selected ? 'text-color-menu-selected': 'text-color-menu'} font-normal text-xl `}>{label}</p>
            <div className={` ${selected ? 'block' : 'hidden'} w-7 barra-selected  bg-color-menu-selected `}></div>
        </li>
    )
}
export default MenuData

