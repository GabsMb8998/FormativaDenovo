import { InputUpdate } from "../componets/inputUpdate";
import NavTable from "../componets/NavTable";
import Titulo from "../componets/Titulo";
import { TituloOficial } from "../componets/TituloOficial";

import { useLocation } from "react-router-dom";

import "../index.css"

export function Update(props){

    const location = useLocation()
    const recebido = location.state
    const parametros = recebido.parametros
    const labelsInputs = Object.keys(parametros)
    const valoresSensor = Object.values(parametros)
    const tipo = recebido.tipo
    const id = parametros.id

    const dados = []
    let body = {

    }

    
    // console.log(parametros.id)

    console.log(dados, 'dados')

    function enviarPatch(){
        fetch('http://127.0.0.1:8000/api/update/',{
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`,
              },
            body:JSON.stringify({

    
                sensor_id: id,
                data: [

                ]
            }) 
        }).then(response=>{
            if (response.ok!=true){
                console.error()
            }
            return response.json()
        })
    }


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
                            <InputUpdate key={index} label={label} placeholder={valoresSensor[index]}
                            onChange={()=>{
                                dados.push((e)=>e.target.value)
                            }}/>
                    ))}

                    </div>

                    <div className="flex mt-24 mr-90">
                        <button className="bg-[#3A3A39] text-[#F3F3F3] py-6 px-20 shadow-button-atualizar text-xl tranform hover:scale-110 duration-200">atualizar</button>
                    </div>

                </div>

            </main>
        </div>
    )
}