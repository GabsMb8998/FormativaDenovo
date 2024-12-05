import { useLocation } from "react-router-dom";
import { InputUpdate } from "../componets/inputUpdate";
import { TituloOficial } from "../componets/TituloOficial";
import NavTable from "../componets/NavTable";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavMobile } from "../componets/mobile/NavMobile";
import iconBack from "../imgs/icon-back.svg" 

export function AddSensores({}){

    const location = useLocation() 
    const table = location.state.table
    const inputs = location.state.tableName
    const navigate = useNavigate()

    // tratativas

    if (inputs.includes('id')){
        inputs.shift()
    }

    useEffect(()=>{
        if (inputs.includes('longitude')){
        }

    },[])
      
    function enviar(){

        for (let index  in inputValues){
            if (inputValues[index] === ''){
                console.log('vc precisa preencher todos os campos')
                return
            }
        }

        fetch('http://127.0.0.1:8000/api/adicionar/',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                table: table,
                inputs: inputValues
            })
        }).then(response=>{
            if (response.ok!=true){
                console.error()
            }
            return response
        })
    }

    const [inputValues, setInputValues] = useState(
        inputs.reduce((acc, input) => {
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
       
        console.log(name, value, 'name e value')
        setInputValues((prevValues)=> ({
            ...prevValues,
            [name] : value
        }))
    }   

    return(
        <div className="flex bg-fundo lg:w-screen">
            <NavTable/>

            <main  className="lg:px-32 lg:py-10 w-full h-full mx-auto ">
                
                    <div className="my-28  lg:justify-start flex-col justify-center">
{/*
                        <div className={`lg:block hidden scale-125 `} onClick={()=>navigate(-1)}>
                            <img src={iconBack} alt="" />
                        </div>

                        <div className={`lg:hidden absolute left-10 top-5`} onClick={()=>navigate(-1)}>
                            <img src={iconBack} alt="" />
                        </div> */}
                        <img className="lg:block hidden scale-125 " onClick={()=>navigate(-1)} src={iconBack} alt="" />
                        <img className={`lg:hidden `}  onClick={()=>navigate(-1)} src={iconBack} alt="" />
                        <TituloOficial titulo={`Adicionar ao tipo ${table}`}/>
                    </div>

                    <div className={`${inputs.length > 6 ? 'lg:grid-cols-4 gap-y-20 gap-x-52' : 'grid-cols-2'}  grid  gap-y-20 items-center justify-center  lg:justify-start mt-24 w-10/12' } grid`}>
                        {inputs.map((input, index)=>(
                        input === "tipo" ? (

                            <div className="flex flex-col">
                                <label className="text-[#C5C5C5] text-lg">tipo</label>
                                <select
                                className="bg-transparent border-b-2 w-60 placeholder-[#606060] border-table text-[#C5C5C5] text-md mt-2" value={inputs[input]} name={input} onChange={ChangeInput} >
                                    <option className="bg-inherit text-sm" value="">Selecione</option>
                                    <option className="bg-inherit" value="1">Umidade</option>
                                    <option className="bg-inherit" value="2">Contador</option>
                                    <option className="bg-inherit" value="3">Temperarura</option>
                                </select>
                            </div>
                    )
                    
                    : input === 'status_operacional' ? (
                            <div className="flex flex-col">
                                <label className="text-[#C5C5C5] text-lg">status_operacional</label>
                                <select className="bg-transparent border-b-2 w-60 placeholder-[#606060] border-table text-[#C5C5C5] text-md mt-2" value={inputs[input]} name={input} onChange={ChangeInput}>  
                                    <option className="bg-inherit text-sm" value="">Selecione</option>
                                    <option className="bg-inherit" value="true">Sim</option>
                                    <option className="bg-inherit" value="false">Não</option>
                                </select>
                            </div>
                        )
                        :
                        <InputUpdate key={index} label={input} onChange={ChangeInput} value={inputValues[input]} name={input}/>
                        ))}
                    </div>

                    <div className="flex lg:mt-24 lg:mr-90 mb-36 mt-20 lg:justify-start justify-center ">
                        <button className="bg-[#3A3A39] text-[#F3F3F3] py-6 px-20 shadow-button-atualizar text-xl tranform hover:scale-110 duration-200" onClick={()=>enviar()}>
                            Enviar 
                        </button>
                    </div>
            </main>
            <NavMobile/>
        </div>
    )
}