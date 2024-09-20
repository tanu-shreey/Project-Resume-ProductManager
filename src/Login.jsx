import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate ,Link} from 'react-router-dom';
import AdminPanel from './AdminPanel'
import { useState } from 'react'
import Register from './Register';


const Login = () => {
     const [input,setInput] =useState({
     email:'', password:''
     });
      const navigate = useNavigate();
      const handleLogin=(e)=>{
        e.preventDefault();
      const logedUser =  JSON.parse(localStorage.getItem('user'));
      localStorage.setItem('loggedin', JSON.stringify(true)); 
       if(input.email === logedUser.email && input.password=== logedUser.password){
           navigate('/AdminPanel',{replace:'true'});
       }
       else{
             alert('Invalid data !');
       }
      }
      
  return (
    <div className='  border container bg-light w-25 p-5 mt-5 ' >
      
         <div className='text-center p-2'><h3>Login</h3></div>
       <div>
        <form onSubmit={handleLogin}>
         <input className='form-control m-3 ms-3' id='email' type='email' placeholder='Email' name='email' value={input.email}
          onChange={(e) =>setInput({...input,[e.target.name]:e.target.value})}/>
         <input className='form-control m-3 ms-3' id='password' type='password' placeholder='Password' name='password' value={input.password}
          onChange={(e) =>setInput({...input,[e.target.name]:e.target.value})}/>
            <button  type='submit'className='btn ms-3' style={{ backgroundColor: '#885f43', color: 'white' }}>Login</button> 
          

            <p style={{fontSize:'12px'}} className='m-3'>Do not have an Account ?<Link to ='/Register'>Register here</Link></p>
        </form>
       
        </div>
        </div>
  )

}

export default Login
