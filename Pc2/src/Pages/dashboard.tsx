import React from 'react'
import { dashboardService } from '../Service/dashboardService'
import { useEffect, useState} from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import type { Curso } from '../Types/types'
import { getErrorMenssage } from '../Utils/erros'


function Dashboard() {


    const  [curso , setCurso]  = useState<Curso[]>([])
    const [pag , setPag] = useState(0)
    const porPag = 5;
    const [error, setError] = useState('')
    const navigate = useNavigate();


    useEffect(() => {

        const cargar = async () => {
            
            try{
                const response = await dashboardService.getCursos();
                setCurso(response)
            }catch(err:any){
                setError(getErrorMenssage(err))
            }

        }


        cargar();

    },[])


    const incio = pag*porPag
    const vector = curso.slice(incio, incio+ porPag)


  return (
    <div>
    
        {vector.map((v) => (
            <div key={v.id}className='flex flex-col flex-row justify-center itmes-center '>
                <h1>Paginas totales{curso.length}</h1>
                <h2>Pagina actual: {pag}</h2>
                <p>Nombre del Curso: {v.name}
                   Codigo: {v.code}
                   Creditos: {v.credits}
                   Nota actual : {v.grade}
                   Badge: {v.status} 
                </p>
            </div>
        ))}

        <button onClick={() => setPag(pag-1)} disabled={pag === 0}> Previus</button>
        <button onClick={() => setPag(pag+1)} disabled={incio + porPag >= curso.length}> Next</button>
        <p>
            Quieres crear un nuevo curso? 
            <Link to={'/newCourse'}>Crear un nuevo curso</Link>
        </p>
        {error&& <p>{error}</p>}



    </div>
  )
}

export default Dashboard