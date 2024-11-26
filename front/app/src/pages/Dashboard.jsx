import NavTable from "../componets/NavTable";
import * as React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';

export function Dashboard(){
    const data = [
        { name: 'Temperatura', Temperatura: 4000 },
        { name: 'umidade', umidade: 3000 },
        { name: 'Contador', Contador: 2000},

      ];
    return(
        <div className="flex overflow-y-hidden "> 

            <div>
                <NavTable/>
            </div>

            <main className="px-20 py-20 bg-fundo w-full h-screen ">

                <div>
                    <ResponsiveContainer width="80%" height={300}>
                            <BarChart data={data}>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="Temperatura" fill="#6C6C6C" />
                                <Bar dataKey="umidade" fill="#6C6C6C" />
                                <Bar dataKey="Contador" fill="#6C6C6C" />
                            </BarChart>
                    </ResponsiveContainer>
                </div>


            </main>
        </div>
    )
}