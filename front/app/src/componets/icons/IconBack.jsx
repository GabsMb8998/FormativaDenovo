
export function IconBack({width=65, height=65, fill='#AFACAC', open}){
    return(
        <div style={{width, height, fill}} className={`duration-300 bg-[#434343] rounded-full  shadow-card-home flex justify-center items-center`}>
            
            <svg className={`${open && 'rotate-180 left-52 mr-2'} ml-1` }
                width='25px'
                viewBox="0 0 24 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <rect x="6.26025" y="30.1473" width="3.64946" height="20.9101" rx="1.82473" transform="rotate(-133.082 6.26025 30.1473)" fill={fill}/>
                <rect x="3.30597" y="4.63684" width="3.64946" height="20.9101" rx="1.82473" transform="rotate(-50.131 3.30597 4.63684)" fill={fill}/>
            </svg>

        </div>
    )
}

// width: 'inherit', height: 