import { InputUpdate } from "../componets/inputUpdate";
import NavTable from "../componets/NavTable";
import { TituloOficial } from "../componets/TituloOficial";
import { NavMobile } from "../componets/mobile/NavMobile";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import iconBack from "../imgs/icon-back.svg" 
import "../index.css"




export function Update(props){

    const location = useLocation()
    const recebido = location.state
    const parametros = recebido.parametros
    const labelsInputs = Object.keys(parametros)
    const valoresSensor = Object.values(parametros)
    const tipo = recebido.tipo
    const id = parametros.id
    const [inputs, setInputs] = useState([])

    const navigate = useNavigate()

    // function voltar(){
    //     navigate(-1)
    // }

    const dados = []
    if (labelsInputs.includes('id')){
        labelsInputs.shift()
    }
    
    // console.log(parametros.id)

    console.log(dados, 'dados')

    function enviarPatch(){

        let data = {}
        labelsInputs.forEach((label, index) =>{
            if (inputValues[label] !== ""){
                data[label] =   inputValues[label]
                console.log(inputValues[label], 'input label')
            }
        })

        console.log(data, 'dataaa')

        fetch('http://127.0.0.1:8000/api/update/',{
            method: "PATCH",
            headers: {
                // Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
              },
            body:JSON.stringify({
                table : tipo,
                sensor_id: id,
                data: data
            }) 
        }).then(response=>{
            if (response.ok!=true){
                console.error()
            }
            return response.json()
        })
    }

    const [inputValues, setInputValues] = useState(
        labelsInputs.reduce((acc, input) => {
            acc[input] = ""
            return acc;
        }, {})
    )

    const ChangeInput = (e) => {
        const {name, value} = e.target;

        if (name === 'longitude' || name === "latitude"){
            const isValid = /^[0-9.-]*$/.test(value);

            if(!isValid){
                console.log("Valor inválido. Apenas números são permitidos.");
                return
            }
        }
        setInputValues((prevValues)=> ({
            ...prevValues,
            [name] : value
        }))
    }
       
    useEffect(()=>{
        console.log(inputValues, 'input vvalues')
    },[inputValues])

useEffect(()=>{
    if (window.innerWidth < 640){
        document.body.style.overflowY = 'auto'
    }
},[window.innerWidth])


    return(
        
        <div className="flex bg-fundo w-screen">
            <NavTable/>

            <main className="xl:px-32 xl:py-24 py-10 mx-auto ">
                <div>
                    <img className="lg:block hidden scale-125 " onClick={()=>navigate(-1)} src={iconBack} alt="" />
                    <img className={`lg:hidden `}  onClick={()=>navigate(-1)} src={iconBack} alt="" />
                    <TituloOficial titulo={`Alterar dados id ${valoresSensor[0]}`}/>
                </div>

                <div>

                    <div className={`${labelsInputs.length > 6 ? 'lg:grid-cols-4 gap-y-20 gap-x-52' : 'grid-cols-2'}  grid  gap-y-20 items-center mt-24 w-10/12`}>
                        {labelsInputs.map((label, index)=>(

                            label === 'tipo' ? (
                                <>
                                <div className="flex flex-col">
                                <label 
                                    className="text-[#C5C5C5] text-lg">tipo</label>
                                    <select
                                    className="bg-transparent border-b-2 w-60 placeholder-[#606060] border-table text-[#C5C5C5] text-md mt-1" value={labelsInputs[label]} name={label} onChange={ChangeInput} >
                                        <option className="bg-inherit" value="">Selecione</option>
                                        <option className="bg-inherit" value="1">Umidade</option>
                                        <option className="bg-inherit" value="2">Contador</option>
                                        <option className="bg-inherit" value="3">Temperarura</option>
                                    </select>
                                </div>
                                </>
                              ) : 
                               label === 'status_operacional' ? (

                                <>
                                <div className="flex flex-col">
                                    <label className="text-[#C5C5C5] text-lg">status_operacional</label>
                                    <select className="bg-transparent border-b-2 w-60 placeholder-[#606060] border-table text-[#C5C5C5] text-md mt-2" value={labelsInputs[label]} name={label} onChange={ChangeInput}>
                                        <option className="bg-inherit" value="">Selecione</option>
                                        <option className="bg-inherit" value="true">Sim</option>
                                        <option className="bg-inherit" value="false">Não</option>
                                    </select>

                                </div>
                                </>
                                    ) :
                            <InputUpdate key={index} label={label} placeholder={valoresSensor[index]} onChange={ChangeInput} value={inputValues[label]} name={label}
                        />
                    ))}

                    </div>

                    <div className="flex xl:mt-24 mt-10 mb-24 mr-90">
                        <button className="bg-[#3A3A39] text-[#F3F3F3] py-6 px-20 shadow-button-atualizar text-xl tranform hover:scale-110 duration-200" onClick={()=>enviarPatch()}>atualizar</button>
                    </div>

                </div>
            </main>
            <NavMobile selected={'data'}/>
        </div>
    )
}