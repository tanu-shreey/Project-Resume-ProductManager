import React from 'react'
import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import AdminPanel from './AdminPanel'
import ProtectedRoute from './ProtectedRoute'


const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Routes>
        <Route path='/Register'element={<Register/>}/>
        <Route path='/Login'element={<Login />}/>
        <Route path='/' element={<ProtectedRoute/>}>
        <Route path='/AdminPanel' element={<AdminPanel/>}/>
        </Route >
         
     </Routes>
     </BrowserRouter> 
    </div>
  )
}

export default App
