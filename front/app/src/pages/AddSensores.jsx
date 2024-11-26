import { useLocation } from "react-router-dom";
import { InputUpdate } from "../componets/inputUpdate";
import { TituloOficial } from "../componets/TituloOficial";
import NavTable from "../componets/NavTable";
import { useEffect, useState } from "react";

export function AddSensores({}){

    const location = useLocation() 
    const table = location.state.table
    const inputs = location.state.tableName

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
                "Content-Type": "application/json"  // Adiciona o cabeçalho Content-Type
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

    useEffect(()=>{
        console.log(inputValues)

    },[inputValues])



    return(
        <div className="flex">
            <NavTable/>

            <main  className="px-32 py-10 bg-fundo w-full h-screen ">

                <div className="my-28">
                <TituloOficial titulo={`Adicionar ao tipo ${table}`}/>
                </div>

                <div className={`${inputs.length > 6 ? 'grid-cols-4 gap-y-20 gap-x-52' : 'grid-cols-2' } grid`}>
                    {inputs.map((input, index)=>(
                    input === "tipo" ? (
                    <select
                    className="bg-inherit text-[#C5C5C5] border-b-2 border-slate-800" value={inputs[input]} name={input} onChange={ChangeInput} >
                    <option className="bg-inherit" value="">Selecione</option>
                    <option className="bg-inherit" value="1">Temperatura</option>
                    <option className="bg-inherit" value="2">Umidade</option>
                    <option className="bg-inherit" value="3">Pressão</option>
                  </select>)
                  
                  : input === 'status_operacional' ? (
                    <select className="bg-inherit text-[#C5C5C5] border-b-2 border-slate-800" value={inputs[input]} name={input} onChange={ChangeInput}
                     >  
                        <option className="bg-inherit" value="">Selecione</option>
                        <option className="bg-inherit" value="true">Sim</option>
                        <option className="bg-inherit" value="false">Não</option>
                    </select>)
                    :
                    <InputUpdate key={index} label={input} onChange={ChangeInput} value={inputValues[input]} name={input}/>
                    ))}
                </div>

                <div className="flex mt-24 mr-90">
                    <button className="bg-[#3A3A39] text-[#F3F3F3] py-6 px-20 shadow-button-atualizar text-xl tranform hover:scale-110 duration-200" onClick={()=>enviar()}>
                        Enviar 
                    </button>
                </div>

            </main>
        </div>
    )
}