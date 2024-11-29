import { InputUpdate } from "../componets/inputUpdate";
import NavTable from "../componets/NavTable";
import Titulo from "../componets/Titulo";
import { TituloOficial } from "../componets/TituloOficial";

import { useLocation } from "react-router-dom";

import "../index.css"
import { useEffect, useState } from "react";

export function Update(props){

    const location = useLocation()
    const recebido = location.state
    const parametros = recebido.parametros
    const labelsInputs = Object.keys(parametros)
    const valoresSensor = Object.values(parametros)
    const tipo = recebido.tipo
    const id = parametros.id
    const [inputs, setInputs] = useState([])

    const dados = []
    let body = {

    }

    labelsInputs.map((label=>{

    }))

    
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
        console.log(name, value, 'name e value')
        setInputValues((prevValues)=> ({
            ...prevValues,
            [name] : value
        }))
    }   

    useEffect(()=>{
        console.log(inputValues, 'input vvalues')
    },[inputValues])

    return(
        
        <div className="flex overflow-y-hidden">
            <NavTable/>

            <main className="px-32 py-24 bg-fundo w-full h-screen">
                <div>
                    <TituloOficial titulo={`Alterar dados id ${valoresSensor[0]}`}/>
                </div>

                <div>

                    <div className={`${labelsInputs.length > 6 ? 'grid-cols-4 gap-y-20 gap-x-52' : 'grid-cols-2'}  grid  gap-y-20 items-center mt-24 w-10/12`}>
                        {labelsInputs.map((label, index)=>(
                            <InputUpdate key={index} label={label} placeholder={valoresSensor[index]} onChange={ChangeInput} value={inputValues[label]} name={label}
                        />
                    ))}

                    </div>

                    <div className="flex mt-24 mr-90">
                        <button className="bg-[#3A3A39] text-[#F3F3F3] py-6 px-20 shadow-button-atualizar text-xl tranform hover:scale-110 duration-200" onClick={()=>enviarPatch()}>atualizar</button>
                    </div>

                </div>

            </main>
        </div>
    )
}