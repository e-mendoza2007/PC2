import React from 'react'
import { authService } from '../Service/authService'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getErrorMenssage } from '../Utils/erros'



function Register() {


    const [email, setEmail] = useState('')
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [fullName, setFullName] = useState('')
    const [error, setError] = useState('')
    const [men, setMend] = useState('')
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault();
        setError('')

        try{
            const response = await authService.register({email,username,password,fullName})
            setMend('Redirigiendo')
            setTimeout(() => navigate('/login'), 1500)
        
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

            <input
            type='text'
            placeholder='Full Name'
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            />

            <button type='submit' className=''> Registrarse</button>

            <p> Ya se encutrar registrado? 
                <Link to={'login'} className=''>Ir a Login</Link>
            </p>


            {error&& <p>{error}</p>}
            {men&& <p>{men}</p>}

        </form>
    </div>
  )
}

export default Register