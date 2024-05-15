import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)
 let user2 ='chai aur react';
  return (
    <>
      <h1 className='bg-green-500 rounded-xl text-black p-5 mb-5'>Tailwind test</h1>

      <Card username ='chai aue code' btnText = 'See details '/>
      <Card username={user2} btnText ='More Details'/>

     

    </>
  )
}

export default App
