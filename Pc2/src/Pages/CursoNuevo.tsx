import React from 'react'
import { dashboardService } from '../Service/dashboardService'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getErrorMenssage } from '../Utils/erros'



function CursoNuevo() {

    const [name, setName] = useState('')
    const [code, setCode] = useState('')
    const [credits, setCredits] = useState(0)
    const [grade, setGrade] = useState(0)
    const [status, setSatus] = useState('')
    const navigate = useNavigate();
    const [err, setError] = useState('')
    const [men, setMend] = useState('')


    const handleSubmit = async (e: React.FormEvent)=> {


        e.preventDefault()

        try{

            const response = await dashboardService.nuevo({name,code,credits,grade,status})
            setMend('Redirigiendo')
            setTimeout(()=> navigate('/dashboard'),1500)
        }catch(err:any){
            setError(getErrorMenssage(err))
        }
    }




 return (
    <div className='flex flex-col flex-row justify-center items-center'>
        <form onSubmit={handleSubmit} className='flex flex-col rounded border'>

            <input
            type='text'
            placeholder='Nombre del Curso'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className=''
            />

            <input
            type='text'
            placeholder='Codigo'
            value={code}
            onChange={(e) => setCode(e.target.value)}
            />

            <input
            type='text'
            placeholder='Creidtos'
            value={credits}
            onChange={(e) => setCredits(Number(e.target.value))}
            />

            <input
            type='text'
            placeholder='Nota'
            value={grade}
            onChange={(e) => setGrade(Number(e.target.value))}
            />


            <input
            type='text'
            placeholder='Estado'
            value={status}
            onChange={(e) => setSatus(e.target.value)}
            />

            <button type='submit' className='border rounded hover: bg-blue-500'> Crear</button>

            {err&& <p>{err}</p>}
            {men&& <p>{men}</p>}

        </form>
    </div>
  )
}

export default CursoNuevo