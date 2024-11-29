import iconUser from '../../imgs/icon-popo.svg'
import iconSettings from "../../imgs/imgs-nav/icon-settings.svg"
import iconLogOut from "../../imgs/imgs-nav/icon-log-out.svg"

export function HeaderMobile(){
    return(
        <header className=' lg:hidden flex justify-between p-5 sm:p-10'>
            
            <div className='flex'>
                <img className='scale-50' src={iconLogOut} alt="" />
                <img className='scale-50' src={iconSettings} alt="" />
            </div>

            <div className='flex items-center gap-x-5'>
                <p className='text-[#B5B5B5] text-lg font-medium'>popo</p>
                <img src={iconUser} alt="" />   
            </div>
        </header>
    )
}