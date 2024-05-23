import React from 'react'
import { useState,useContext } from 'react'
import UserContext from '../context/UserContext'


function Login() {
    const [username,setUsername] =useState('')
    const [password,setPassword] =useState('')

    const {setUser} =useContext(UserContext)
    const handleSubmit=(e)=>{
        e.preventDefault();
        setUser({username,password})
    }
  return (
    <div >
        <h2>Login</h2>
        <input type='text' 
        className='m-5 px-4 py-2'
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        placeholder='usename' />
        <br/>
        <input type='text' 
        className='px-4 py-2'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='password' />
        <br/>
        <button onClick={handleSubmit}
        className='mt-5'
        >Submit</button>
    </div>
  )
}

export default Login