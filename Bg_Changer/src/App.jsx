import { useState } from 'react'

import './index.css'

function App() {
 
  let [value, setValue]=useState('olive');

  

  return (
    <>
      <div  style={{backgroundColor:value}}  className="h-screen w-full flex justify-center items-end space-x-3">
        
      <button onClick={()=>setValue("white")} className="my-6 bg-[white] ring-2 ring-black  px-4 rounded-lg ">White</button>         
      <button onClick={()=>setValue("red")} className="my-6 bg-[red] px-4 ring-2 ring-black rounded-md shadow-xl text-[white]  ">Red</button> 
      <button onClick={()=>setValue("yellow")} className="my-6 bg-[yellow] ring-2 ring-black  px-4 rounded-lg ">Yellow</button> 
      <button onClick={()=>setValue("green")} className="my-6 bg-[green] ring-2 ring-black  px-4 rounded-lg ">Green</button>         
      <button onClick={()=>setValue("purple")} className="my-6 bg-[purple] px-4 ring-2 ring-black rounded-md shadow-xl text-[white]  ">Purple</button> 
      <button onClick={()=>setValue("blue")} className="my-6 bg-[blue] ring-2 ring-black  px-4 rounded-lg ">Blue</button>

      </div>
    </>
  )
}

export default App
