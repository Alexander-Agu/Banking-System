import React from 'react'
import './hero.css'

function Hero() {
  return (
    <section className='hero'>
      <h1 className='welcome'>Welcome to SenaX Banking</h1>

      <div className="intro">
        <h2>Join us today and experience the convenience and security of modern banking at your fingertips.</h2>

        <div className="links">
          <a href="#" className='register'>REGISTER</a>
          <a href="#" className='about'>About</a>
        </div>
      </div>
    </section>
  )
}

export default Hero

/* 
<p>
    Welcome to SenaX Banking. We help you Manage your finances effortlessly. Our app offers secure, user-friendly features to help you bank with ease
</p>

<p>
    SenaX Banking is designed to make your financial life simpler and more efficient.With our cutting-edge security measures, you can trust that your personal and financial information is always protected
</p>
*/