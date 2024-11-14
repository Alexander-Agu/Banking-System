import React, { useState } from 'react'
import './registration.css'

function InputBox({title}) {
  const [box, setBox] = useState()
  return (
    <div className='box'>
      <h2 className='boxTitle'>Please insert your name</h2>
      <input type="text" onChange={(e)=>{setBox(e.target.value)}} className='inputBox'/>
    </div>
    
  )
}

export default InputBox