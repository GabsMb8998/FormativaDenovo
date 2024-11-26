import "../index.css"

function Uploads(props) {

    const buttonClass = props.type === 'sensor'? 'button-sensor':
                        props.type === 'temperatura'? 'button-temperatura':
                        props.type === 'umidade'? 'button-umidade':
                        props.type === 'luminosidade'? 'button-luminosidade':
                        props.type === 'contador'? 'button-contador': "";

    const iconClass = props.type === 'sensor'? 'icon-sensor':
                        props.type === 'temperatura' ? 'icon-temperatura':
                        props.type === 'umidade' ? 'icon-umidade':
                        props.type === 'luminosidade' ? 'icon-luminosidade':
                        props.type === 'contador' ? 'icon-contador': "";
    return(
        // container 
        <div className="my-4 flex justify-between shadow py-6 px-24 items-center rounded-md">

            {/* nome e imagem  */}
            <div className="flex items-center gap-x-16">
                <div className={`flex justify-center w-16 h-14 rounded-md ${iconClass}`}>
                    <img className="w-2/4" src={props.icon} alt="" /> 
                </div>

                <div>
                    <h4 className="text-xl color-font-dados font-medium ">{props.name}</h4>
                </div>
            </div>

            {/* container botoes upload  */}
            <div className=" flex gap-x-10">

                <div className="relative flex ">
                    
                    <button className=" py-4 px-8 rounded text-lg escolher-arquivo font-semibold">Escolher arquivo</button>
                    <input
                    className="opacity-0 absolute w-full"
                    onChange={(e)=> props.fileChangeHundler(e, props.type)}
                    type="file" />

                </div>

                <div>
                     
                    <button
                    className={`${buttonClass} text-lg py-4 px-12 rounded`}
                    onClick={()=> props.handleSubmitSensor(props.type)}
                    >Enviar</button>
                </div>
            </div>

        </div>
    )
}

export default Uploads