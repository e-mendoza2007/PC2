import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Dashboard from './Pages/dashboard'
import CursoNuevo from './Pages/CursoNuevo'

function App() {
  return (
    <Routes>

      <Route path='/' element={<Register/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/newCourse' element={<CursoNuevo/>}/>
    </Routes>
  )
}

export default App