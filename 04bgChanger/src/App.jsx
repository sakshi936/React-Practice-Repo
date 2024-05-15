import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className='w-screen h-screen duration-200' style={{backgroundColor: color}}>

        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-6 shadow-lg bg-white rounded-full px-4 py-2 text-black'>
            <button onClick={()=> setColor('#c91e1e')} className='outline-none px-5 rounded-full' style={{backgroundColor: "#c91e1e"}}>Red</button>
            <button  onClick={()=> setColor('#b8c91e')} className='outline-none px-5 rounded-full' style={{backgroundColor: "#b8c91e"}}>Green</button>
            <button onClick={()=> setColor('#f57af1')} className='outline-none px-5 rounded-full' style={{backgroundColor: "#f57af1"}}>Lavender</button>
            <button onClick={()=> setColor('#c91e54')} className='outline-none px-5 rounded-full' style={{backgroundColor: "#c91e54"}}>Pink</button>
            <button onClick={()=> setColor('#024d44')} className='outline-none px-5 rounded-full' style={{backgroundColor: "#024d44"}}>Rama</button>
            <button onClick={()=> setColor('#2c3ddb')} className='outline-none px-5 rounded-full' style={{backgroundColor: "#2c3ddb"}}>Blue</button>
            <button onClick={()=> setColor('#2cdbad')} className='outline-none px-5 rounded-full' style={{backgroundColor: "#2cdbad"}}>Sea Green</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
