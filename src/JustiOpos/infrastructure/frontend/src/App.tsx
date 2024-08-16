import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './components/Home'
import { Register } from './components/Register'
import { Login } from './components/Login'

function App() {
 
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
      </Routes>    
    </>
  )
}

export default App
