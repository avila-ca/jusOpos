import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './components/Home'
import { Register } from './components/Register'

function App() {
 
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register />}/>
      </Routes>    
    </>
  )
}

export default App
