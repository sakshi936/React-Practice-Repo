import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'
import './App.css'


function App() {
  const [user, setUser] = React.useState(null)
  return (
    <UserContextProvider >
        <h1  className='mb-6'> Context API React</h1>
        <Login/>
        <Profile/>
      </UserContextProvider>   
  )
}

export default App
