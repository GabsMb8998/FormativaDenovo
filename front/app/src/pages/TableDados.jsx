
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import NavTable from "../componets/NavTable.jsx"
import Table from "../componets/Table"
import MenuData from "../componets/MenuData.jsx"
import { TituloOficial } from "../componets/TituloOficial.jsx"


// imgs 
import iconBack from "../imgs/imgs-nav/icon-back.svg"
import iconAdd from "../imgs/icon-add.svg"
import iconTemperatura from "../imgs/icon-temperatura.svg"
import iconMenu from '../imgs/icon-menu.svg'


import "../index.css"
import { NavMobile } from "../componets/mobile/NavMobile.jsx"

function TableDados(){

    const [token, setToken] = useState('')
    const [tableName, setTableName]= useState([])
    const [resultado, setResutado] = useState([])
    const [selected, setSelected] = useState('sensores')

    const navigate = useNavigate()

    useEffect(()=>{
        const guardarToken = localStorage.getItem('token')
        console.log(guardarToken, 'gardar')
        setToken(guardarToken)
        })

    useEffect(()=>{
        setResutado([])
        setTableName([])
    },[selected]) 
    
        
        useEffect(()=>{

            const buscarDados = ()=>{
                if (selected === 'temperatura'){
                    fetch('http://127.0.0.1:8000/api/temperatura/',{
                        headers: {
                            Authorization: `Bearer ${token}`,
                          },
                    }).then(response => {
                        if(response.ok!=true){
                            console.error()
                        }
                        return response.json()
                    }).then(data =>{
                        const firstItem  = data[0]
                        const columnNames  = Object.keys(firstItem)
                        setTableName(columnNames)
                        setResutado(data)
                    });   
                } else if(selected === 'luminosidade'){
                    fetch('http://127.0.0.1:8000/api/luminosidade/',{
                        headers: {
                            Authorization: `Bearer ${token}`,
                          },
                    }).then(response => {
                        if(response.ok!=true){
                            console.error()
                        }
                        return response.json()
                    }).then(data =>{
                        const firstItem  = data[0]
                        const columnNames  = Object.keys(firstItem)
                        setTableName(columnNames)
                        setResutado(data)
                    }); 
                } else if (selected === 'umidade'){
                    fetch('http://127.0.0.1:8000/api/umidade/',{
                        headers: {
                            Authorization: `Bearer ${token}`,
                          },
                    }).then(response => {
                        if(response.ok!=true){
                            console.error()
                        }
                        return response.json()
                    }).then(data =>{
                        const firstItem  = data[0]
                        const columnNames  = Object.keys(firstItem)
                        setTableName(columnNames)
                        setResutado(data)
                    }); 
                }else if (selected === 'contador'){
                    fetch('http://127.0.0.1:8000/api/contador/',{
                        headers: {
                            Authorization: `Bearer ${token}`,
                          },
                    }).then(response => {
                        if(response.ok!=true){
                            console.error()
                        }
                        return response.json()
                    }).then(data =>{
                        const firstItem  = data[0]
                        const columnNames  = Object.keys(firstItem)
                        setTableName(columnNames)
                        console.log(tableName, 'teste')
                        setResutado(data)
                    }); 
                }else if (selected === 'sensores'){
                    fetch('http://127.0.0.1:8000/api/sensores/',{
                        headers: {
                            Authorization: `Bearer ${token}`,
                          },
                    }).then(response => {
                        if(response.ok!=true){
                            console.error()
                        }
                        return response.json()
                    }).then(data =>{
                        const firstItem  = data[0]
                        const columnNames  = Object.keys(firstItem)
                        setTableName(columnNames)
                        console.log(tableName, 'teste')
                        setResutado(data)
                    }); 
                }
            }
            buscarDados()
    
        }, [selected, token])

    function mudarSelecionado(selecionado){

        if (selecionado === 'sensores'){
            setSelected('sensores')
        }
        if (selecionado === 'temperatura'){
            setSelected('temperatura')
        }
        if (selecionado === 'luminosidade'){
            setSelected('luminosidade')
        }
        if (selecionado === 'umidade'){
            setSelected('umidade')
        }
        if (selecionado === 'contador'){
            setSelected('contador')
        }


    }


    return(
           <div className="flex xl:flex-row flex-col h-screen w-screen bg-fundo overflow-x-hidden overflow-y-hidden">
                    <div>
                        <NavTable page='table' selected={'data'}/>     
                    </div>
                    <img className="xl:hidden w-10 h-10 ml-12 my-10" src={iconMenu} alt="" />

                <main className="xl:pl-20 xl:py-20 w-full h-screen flex flex-col px-10">

                    <div className="flex items-center gap-x-10 justify-between xl:w-5/6 w-full mt-2 ">
                        <TituloOficial titulo={`Dados ${selected}` }/>
                        <img src={iconAdd} alt="" onClick={()=>navigate('/addSensores', {state: {table: selected, tableName: tableName }} ) }/>
                    </div>

                    <div>
                        <ul  className="xl:flex gap-x-20 my-20 hidden self-start">
                        <MenuData label='sensores' selected={selected ==='sensores'}  onClick={()=> mudarSelecionado('sensores')}/>
                        <MenuData label='temperatura' selected={selected ==='temperatura'}  onClick={()=> mudarSelecionado('temperatura')}/>
                        <MenuData label='luminosidade' selected={selected ==='luminosidade'}  onClick={()=> mudarSelecionado('luminosidade')}/>
                        <MenuData label='umidade' selected={selected ==='umidade'}  onClick={()=> mudarSelecionado('umidade')}/>
                        <MenuData label='contador' selected={selected ==='contador'}  onClick={()=> mudarSelecionado('contador')}/>
                        </ul>
                    </div>

                    <div className="overflow-y-auto h-[60%] w-full xl:w-5/6 shadowTable px-20 py-10 overflow-x-auto">
                        <Table tipo={selected} resetar='' resultado={resultado} tableName={tableName}/>
                    </div>
                </main>

                <NavMobile selected={'data'}page={'table'}/>
           </div>
    )
}

export default TableDados