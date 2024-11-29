import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "../index.css"

import iconEdit from "../imgs/icon-edit.svg"

function Table({tipo, resultado, tableName}){

    const navigate = useNavigate()

    function editar(parametros,){
        console.log(parametros)
        navigate(`/update/`, {state:{ parametros:parametros, tipo:tipo}})
    }

    console.log(tableName)

    return(
        <table className=" bg-[#333333]  table-auto w-full h-3/5 p-20 ">


            <thead>
                <tr className="text-[#C5C5C5] font-medium mb-5 py-10 ">
                    {tableName.map((columnName, index) => (
                        <th key={index} className="text-center px-16 py-10 font-medium text-lg">{columnName}</th>
                        
                    ))}

                    <th className="text-center px-16 py-10 font-medium text-lg">edit</th>
                </tr>
            </thead>

            <tbody>

                {resultado.map((row, rowIndex)=>(

                    <tr key={rowIndex} className=" text-[#878787] border-table text-center">
                        <td className="lg:px-4 lg:py-5">{row.id}</td>

                        {tableName.includes('valor')&&
                        <td className="px-2 py-3">{row.valor}</td>
                        }
                        {tableName.includes('timestamp')&&
                        <td className="px-2 py-3">{row.timestamp}</td>
                        }
                        {tableName.includes('sensor')&&
                        <td className="px-2 py-3">{row.sensor}</td>
                        }
                         {tableName.includes('tipo')&&
                        <td className="px-2 py-3">{row.tipo}</td>
                        }

                        {tableName.includes('mac_address')&&
                        <td className="px-2 py-3">{row.mac_address }</td>
                        }
                        {tableName.includes('latitude')&&
                        <td className="px-2 py-3">{row.latitude}</td>
                        }
                        {tableName.includes('longitude')&&
                        <td className="px-2 py-3">{row.longitude}</td>
                        }
                        {tableName.includes('localizacao')&&
                        <td className="px-2 py-3">{row.localizacao}</td>
                        }
                        {tableName.includes('responsavel')&&
                        <td className="px-2 py-3">{row.localizacao}</td>
                        }
                        {tableName.includes('unidade_medida')&&
                        <td className="px-2 py-3">{row.unidade_medida}</td>
                        }
                        {tableName.includes('status_operacional')&&
                        <td className="px-2 py-3">{row.status_operacional}</td>
                        }
                        {tableName.includes('observacao')&&
                        <td className="px-2 py-3">{row.observacao}</td>
                        }
                       
                        <td className="" onClick={()=>editar(row)}>
                            <img className="scale-[0.38] ml-7" src={iconEdit} alt="" />
                        </td>
                    </tr>

                ))}
            
            </tbody>
        </table>
    )
}

export default Table