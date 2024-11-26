
export function IconHome({width=28, height=30, fill}){

    console.log(fill, 'fill')
    return(
        <div style={{width, height, fill}}>
            
            <svg
            style={{width: 'inherit', height:'inherit', fill: 'inherit'}}
            viewBox="0 0 28 30"
            fill={fill}
            xmlns="http://www.w3.org/2000/svg">
                <path d="M25.625 29.25H18.875C17.8392 29.25 17 28.4108 17 27.375V20.625C17 19.7962 16.3288 19.125 15.5 19.125H12.5C11.6712 19.125 11 19.7962 11 20.625V27.375C11 28.4108 10.1608 29.25 9.125 29.25H2.375C1.33925 29.25 0.5 28.4108 0.5 27.375V13.0598C0.5 11.3355 1.2905 9.7065 2.64425 8.64L13.3032 0.24075C13.712 -0.08025 14.288 -0.08025 14.696 0.24075L25.3565 8.64C26.7102 9.7065 27.5 11.3347 27.5 13.0582V27.375C27.5 28.4108 26.6608 29.25 25.625 29.25Z" fill="#787878"/>
            </svg>

        </div>
    )
}

