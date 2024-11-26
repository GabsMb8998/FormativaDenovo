import { useEffect, useState } from 'react'
import '../App.css'
import Uploads from '../componets/uploads'
import "../index.css"


import iconSensor from "../imgs/icon-sensor.svg"
import iconTemperatura from "../imgs/icon-temperatura.svg"
import iconLuminosidade from "../imgs/icon-luminosidade.svg"
import iconUmidade from "../imgs/icon-umidade.svg"
import iconContador from "../imgs/icon-contador.svg"

function UploadSensores() {

  const [csvSensor, SetCsvSensor] = useState("")
  const [csvTemperatura, SetCsvTemperatura] = useState("")
  const [csvUmidade, SetCsvUmidade] = useState("")
  const [csvLuminosidade, SetCsvLuminosidade] = useState("")
  const [csvContador, SetCsvContador] = useState("")
  const [input, setInput] = useState("")
  const [token, setToken] = useState("")

  useEffect(()=>{
    setToken(localStorage.getItem('token'))
  })

  function fileChangeHundler(e, type){
      if (type == 'sensor'){
        SetCsvSensor(e.target.files[0])
        console.log(input, 'testando input no file')
        console.log(type, 'type')
        setInput(type)
        console.log(type, 'testando input no file')
      }
      else if (type == 'temperatura'){
        SetCsvTemperatura(e.target.files[0])
        setInput(type)
      }
      else if (type == 'umidade'){
        SetCsvUmidade(e.target.files[0])
        setInput(type)
      }
      else if (type == 'luminosidade'){
        SetCsvLuminosidade(e.target.files[0])
        setInput(type)
      }
      else if (type == 'contador'){
        SetCsvContador(e.target.files[0])
        setInput(type)
      }
  }

  const handleSubmitSensor =  (i)=>{

    const formData = new FormData();
    console.log(i, 'i')

    if (i === 'sensor'){
      formData.append('file',csvSensor)
      formData.append('table', input)
    }
    else if(i === 'temperatura'){
      formData.append('file',csvTemperatura)
      formData.append('table', input)
    }
    else if(i === 'umidade'){
      formData.append('file',csvUmidade)
      formData.append('table', input)
    }
    else if(i === 'luminosidade'){
      formData.append('file',csvLuminosidade)
      formData.append('table', input)
    }
    else if(i === 'contador'){
      formData.append('file',csvContador)
      formData.append('table', input)
    }
    
      
      fetch("http://127.0.0.1:8000/api/uploads/", {
        method: 'POST',
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },

        }).then(response =>{
          console.log(csvSensor, 'csv sensor teste')

          console.log(response, 'resposta')

          console.log(response.ok, 'hsha')
          if (response.ok) {
      
            console.log('Resposta:', response.json());
          } else {
            console.error('Erro:', response.statusText);
          }
        })

      }

  return (
    <div className='mx-52 my-24 font-semibold text-slate-800 text-3xl'>

        <div className=' mb-14'>
          <h1 className='color-titulo'>Uploads Arquivos</h1>
        </div>

        <div className='flex flex-col'>

          <Uploads
          name = 'Sensores'
          icon = {iconSensor}
          fileChangeHundler = {fileChangeHundler}
          handleSubmitSensor = {handleSubmitSensor}
          type= 'sensor'    
          />

          {console.log(csvSensor, 'csvSensor')}

        <Uploads
          name = 'Temperatura'
          icon = {iconTemperatura}
          fileChangeHundler = {fileChangeHundler}
          handleSubmitSensor = {handleSubmitSensor}
          type= 'temperatura'
          />


        <Uploads
          name = 'Luminosidade'
          icon = {iconLuminosidade}
          fileChangeHundler = {fileChangeHundler}
          handleSubmitSensor = {handleSubmitSensor}
          type= 'luminosidade'
          />
 
        <Uploads
          name = 'Umidade'
          icon = {iconUmidade}
          fileChangeHundler = {fileChangeHundler}
          handleSubmitSensor = {handleSubmitSensor}
          type= 'umidade'
          />
 

        <Uploads
          name = 'Contador'
          icon = {iconContador}
          fileChangeHundler = {fileChangeHundler}
          handleSubmitSensor = {handleSubmitSensor}
          type= 'contador'
          />
        </div>
    </div>
  )
}

export default UploadSensores
