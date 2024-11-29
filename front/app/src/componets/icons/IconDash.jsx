
export function IconDash({width=34, height=34, fill}){
    
    console.log(fill , 'iconDash')
    return(
        <div style={{width, height, fill}}>
        
            <svg 
            style={{width: 'inherit', height:'inherit'}}
                 viewBox="0 0 34 34"
                fill={fill} 
                xmlns="http://www.w3.org/2000/svg">
                <rect y="9.3855" width="7.4375" height="24.6146" rx="1.41667" />
                <rect x="13.2812" y="18.948" width="7.4375" height="15.0521" rx="1.41667" />
                <rect x="26.5625" width="7.4375" height="34" rx="1.41667" />
            </svg>


        </div>
    )
}

