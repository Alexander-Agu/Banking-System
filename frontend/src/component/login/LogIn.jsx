import React from 'react'
import './login.css'

function LogIn() {
  return (
    <article className='loginContainer'>
        <div className="loginApp">

            <div className="loginIntro">
                <p>Welcome back to</p>
                <h1>Senax Banking</h1>
            </div>

            <div className="inputForm">
                <div className="name">
                    <h2>Name</h2>
                    <input type="text" />
                </div>

                <div className="accountNumber">
                    <h2>Account Number</h2>
                    <input type="text" />
                </div>

                <div className="pass">
                    <h2>Password</h2>
                    <input type="text" />
                </div>

                <button className='loginButton'>Continue</button>
            </div>

            <p className='loginAlternative'>Dont't have an account? <span>Sign up</span> now.</p>


        </div>
    </article>
  )
}

export default LogIn