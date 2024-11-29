import NavTable from "../componets/NavTable";
import * as React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';
import "../index.css"
import { useState, useEffect } from "react";
export function Dashboard(){

    const [temperatura, setTemperatura] = useState([])
    const [umidade, setUmidade] = useState([])
    const [contador, setContador] = useState([])
    // const [selectd, setSelected] =  useState('dashboard')


    fetch('http://127.0.0.1:8000/api/sensores/', {

    }).then(response=>{
        if(response.ok != true ){
            return console.error()
        }
        return response.json()
    }).then(data=>{
        console.log(data)
        data.map(dado=>{
            if (dado.tipo === 1){
                setTemperatura([...temperatura, dado.tipo])
            }else if (dado.tipo === 2){
                setUmidade([...umidade, dado.tipo])
            }else {
                setContador([...contador, dado.tipo])
            }
        })
    })

    const data = [
        { name: 'Temperatura', Temperatura: temperatura.length},
        { name: 'umidade', umidade: umidade.length },
        { name: 'Contador', Contador: contador.length},

      ];
    return(
        <div className="flex overflow-y-hidden "> 

            <div>
                <NavTable  selected={'dashboard'} />
            </div>

            <main className="px-20 py-20 bg-fundo w-full h-screen">

                <div className="my-52 ml-48">
                    <ResponsiveContainer width="80%" height={300}>
                            <BarChart data={data}>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend/>
                                <Bar dataKey="Temperatura" fill="#222222" />
                                <Bar dataKey="umidade" fill="#C3C3C3" />
                                <Bar dataKey="Contador" fill="#6C6C6C" />
                            </BarChart>
                    </ResponsiveContainer>
                </div>


            </main>
        </div>
    )
}