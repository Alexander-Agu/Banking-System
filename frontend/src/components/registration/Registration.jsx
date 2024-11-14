import React from 'react'
import './registration.css'
import InputBox from './InputBox'
import Header from '../header/Header'

function Registration() {
  return (
    <article className='mainRegistration'>
      {<Header />}

      <div className="formType">
        <div className="create">
          <h1>Create an Account</h1>
          <InputBox title={'Insert Name'} />
        </div>

        <div className="reset">
          
        </div>
      </div>
    </article>
  )
}

export default Registration