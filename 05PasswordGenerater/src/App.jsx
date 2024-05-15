import { useState,useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)

  const [numberA,setNumber] =useState(false)
  const [charA,setChar] = useState(false)
  const [password, setPass] = useState('')
 

  // useRef hook

  const passRef = useRef(null) 


  const passGenerator= useCallback(()=>{

   let pass = " "
    let str ="ABDDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberA) str+="0123456789"
    if(charA) str+="!@#$%^&*(){}[]~`_+-/<>"


    for(let i=1;i<=length;i++){

      let char = Math.floor(Math.random()* str.length + 1 )

      pass +=str.charAt(char);
      
    }
    setPass(pass)

  },[length,numberA,charA,setPass])

  
  // copy to clipboard 
  const copyPasstoClipBoard = useCallback(()=>{

    passRef.current?.select();
    // passRef.current?.setSelectionRange(0,3); // select only given range 
    window.navigator.clipboard.writeText(password)

  }, [password])

  
  // generates random password(get activated( passGenerator())) on triggering/getting any changes in any of its dependencies([length,numberA,charA,passGenerator]) 
  useEffect(()=>{  passGenerator() },[length,numberA,charA,passGenerator])


  


  return (
  
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">

      <h1 className='text-white text-center my-3'>Password generator</h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passRef}
            
        />

        <button 
        onClick={copyPasstoClipBoard}
        className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0  hover:bg-blue-900'>Copy</button>

      </div>
      <div className='flex text-sm gap-x-2'>

        <div className='flex items-center gap-x-1'>

          <input 
            type="range" 
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
          />

          <label>Length:{length}</label>
        </div>

      {/* allowNumbers */}
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberA}
          id="numberInput"
          onChange={() => {
              setNumber((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>

      {/*  allow charecter */}


      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charA}
              id="characterInput"
              onChange={() => {
                  setChar((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
      </div>
    </div>
    
  )
}

export default App
