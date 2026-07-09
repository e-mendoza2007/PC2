import React from 'react'
import { authService } from '../Service/authService'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getErrorMenssage } from '../Utils/erros'

function Login() {
  
    const [email, setEmail] = useState('')
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [men, setMend] = useState('')
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault();
        setError('')

        try{
            const response = await authService.login({email,username,password})
            localStorage.setItem('token', response.token)
            setMend('Redirigiendo')
            setTimeout(() => navigate('/dashboard'), 1500)
        
        }catch(err:any){
            setError(getErrorMenssage(err))
        }

    }


  return (
    <div>
        <form onSubmit={handleSubmit} className='flex flex-col rounded border'>

            <input
            type='text'
            placeholder='User Name'
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            className=''
            />

            <input
            type='text'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />

            <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />

        
            <button type='submit' className=''> Iniciar Sesion</button>

            <p> No se ha registrado? 
                <Link to={'register'} className=''>Ir a Registro</Link>
            </p>

            {error&& <p>{error}</p>}
            {men&& <p>{men}</p>}

        </form>
    </div>
  )
}

export default Login