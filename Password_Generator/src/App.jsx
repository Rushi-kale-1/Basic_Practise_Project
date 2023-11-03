import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const [length, setLength]= useState(8);
  const [number, setNumber]=useState(false);
  const [char, setChar]=useState(false);
  const [password, setPassword]=useState('');
  const [msg, setMsg]=useState('Copy!')

  const passwordGenerator= useCallback(()=>{
    let str="qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM";
    let pass=''
    if(number) {str+="1234567890";}
    if(char) {str+="~`!@#$%^&*()-_+=|\}]{[:;?/>.<,"}
    for (let i = 0; i <length; i++) {
        let char = Math.floor(Math.random() * str.length +1);
        pass+=str.charAt(char); 
    }
    setPassword(pass);
    setMsg('Copy!')
    
  }, [length,number, char,setPassword])

  useEffect(()=>{
    passwordGenerator()
    
  }, [length, number, char, passwordGenerator])

  const psref = useRef(null);
  const copyPassword = ()=>{
    window.navigator.clipboard.writeText(password)
    psref.current?.select();
    setMsg('Copied!')
    
  }


  return (
    <>
    <div className=' w-full max-w-lg  mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-blue-900 text-[black]'>
      <h1 className='text-white text-2xl my-2 mb-3 text-center'>Password Generator</h1>
      <div className='flex justify-center mb-4'>
      <input className='bg-white text-center rounded-lg px-24  py-2 '
      placeholder='Password'
      type='text'
      ref={psref}
      value={password}
      readOnly
      />
      <button onClick={copyPassword}className="ml-3 text-white bg-black px-3 py-1 rounded-lg hover:bg-white hover:text-black font-semibold ">{msg}</button>
      
      </div  >
      <div className='flex overflow-hidden justify-center mb-4 '>
      <input className=' cursor-pointer '
      id='range'
      type='range'
      min={8}
      max={32}
      value={length}
      onChange={(e)=>{setLength(e.target.value)}}
      />
      <label htmlFor="range" className='text-white text-sm mx-2'>Length: {length}</label>

      <input className='ml-3 mr-1'
      id='num'
      type='checkbox'
      defaultChecked={number}
      onChange={()=>{
        setNumber((number)=>
          !number
        )
      }}
      />
      <label htmlFor="num" className='text-white text-sm'>Number</label>

      <input className='ml-3 mr-1 '
      id='char'
      type='checkbox'
      defaultChecked={char}
      onChange={()=>{
        setChar((char)=>!char)
      }}
      />
      <label htmlFor="char" className='text-white text-sm'>Characters</label>
    </div>
    </div>
    </>
  )
}

export default App
