import React, { useState } from 'react'
import './registration.css'
import Header from '../header/Header'

function Registration() {
  const [name, setName] = useState("");
  const [emal, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [pin, setPin] = useState("");

  return (
    <article className='mainRegistration'>
      {<Header />}

      <div className="formType">
        <div className="create">
          <h1>Create an Account</h1>
            {/* Name input field */}
          <div className="createForm">
            <div className='box'>
              <h2 className='boxTitle'>Name</h2>
              <input type="text" onChange={(e)=>{setName(e.target.value)}} className='inputBox'/>
            </div>
              {/* Email input field */}
            <div className='box'>
              <h2 className='boxTitle'>Email</h2>
              <input type="text" onChange={(e)=>{setEmail(e.target.value)}} className='inputBox'/>
            </div>
              {/* Phone number input field */}
            <div className='box'>
              <h2 className='boxTitle'>Phone Number</h2>
              <input type="text" onChange={(e)=>{setNumber(e.target.value)}} className='inputBox'/>
            </div>
              {/* Pin input field */}
            <div className='box'>
              <h2 className='boxTitle'>Create Pin</h2>
              <input type="text" onChange={(e)=>{setPin(e.target.value)}} className='inputBox'/>
            </div>
          </div>
        </div>

        <div className="reset">
          
        </div>
      </div>
    </article>
  )
}

export default Registration