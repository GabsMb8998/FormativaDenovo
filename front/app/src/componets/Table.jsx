import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import {LinhaTable} from "./LinhaTable.jsx";
import "../index.css"

import iconEdit from "../imgs/icon-edit.svg"

function Table({tipo, resultado, tableName}){

    const navigate = useNavigate()

    function editar(parametros,){
        navigate(`/update/`, {state:{ parametros:parametros, tipo:tipo}})
    }

    return(
        <table className=" bg-[#333333]  table-auto w-full h-3/5 p-20 ">


            <thead>
                <tr className="text-[#C5C5C5] font-medium mb-5 py-10 ">
                    {tableName.map((columnName, index) => (
                        <th key={index} className="text-center px-16 lg:py-10 py-3 font-medium text-lg">{columnName}</th>
                    ))}
                    <th className="text-center lg:px-16 px-5 lg:py-10 py-3 font-medium text-lg">edit</th>
                </tr>
            </thead>

            <tbody>

                {resultado.map((row, rowIndex)=>(

                    <tr key={rowIndex} className=" text-[#878787] border-table text-center">
                        {/* <td className="lg:px-4 lg:py-5">{row.id}</td> */}
                        <LinhaTable label={row.id}/>

                        {tableName.includes('valor')&&
                        // <td className="px-2 py-3">{row.valor}</td>
                        <LinhaTable label={row.valor}/>
                        }
                        {tableName.includes('timestamp')&&
                        // <td className="px-2 py-3">{row.timestamp}</td>
                        <LinhaTable label={row.timestamp}/>
                        }
                        {tableName.includes('sensor')&&
                        // <td className="px-2 py-3">{row.sensor}</td>
                        <LinhaTable label={row.sensor}/>
                        }
                         {tableName.includes('tipo')&&
                        // <td className="px-2 py-3">{row.tipo}</td>
                        <LinhaTable label={row.tipo}/>
                        }

                        {tableName.includes('mac_address')&&
                        <LinhaTable label={row.mac_address}/>
                        }
                        {tableName.includes('latitude')&&
                        <LinhaTable label={row.latitude}/>
                        }
                        {tableName.includes('longitude')&&
                         <LinhaTable label={row.longitude}/>
                        }
                        {tableName.includes('localizacao')&&
                         <LinhaTable label={row.localizacao}/>
                        }
                        {tableName.includes('responsavel')&&
                        <LinhaTable label={row.responsavel}/>
                        }
                        {tableName.includes('unidade_medida')&&
                        <LinhaTable label={row.unidade_medida}/>
                        }
                        {tableName.includes('status_operacional')&&
                        <LinhaTable label={row.status_operacional}/>
                        }
                        {tableName.includes('observacao')&&
                        <LinhaTable label={row.observacao}/>
                        }
                       
                        <td className="" onClick={()=>editar(row)}>
                            <img className="scale-[0.5] lg:scale-[0.3] xl:scale-[0.38] ml-0 lg:ml-7" src={iconEdit} alt="" />
                        </td>
                    </tr>

                ))}
            
            </tbody>
        </table>
    )
}

export default Table