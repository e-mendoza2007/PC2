import { useNavigate } from "react-router-dom";


export const getErrorMenssage = (err: any) : string => {

    const status = err?.response?.status
    const errBack = err?.response?.data?.message || err?.response?.data?.error


    switch (status){

        case (400) : {return errBack || 'Dato invalido'}
        case (401) : {return  'Logearse de nuevo, se vencio el token'}
        case (403) : {return  'No autorizado'}
        case (404) : {return  'No encontrado'}
        case (409) : {return  errBack || 'Datos ya usado'}
        case (500) : {return  'error del sistema'}

        default : {return errBack || 'Ocurrio algo inseperado'}
    
    }
    
}