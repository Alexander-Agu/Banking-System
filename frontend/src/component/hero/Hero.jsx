import React from 'react'
import './hero.css'

function Hero() {
  return (
    <section className='hero'>
      <div className="right">
        <div className="intro">
          <h1>
            modern banking at your fingertips
          </h1>

          <p>
            Welcome to SenaX Banking. We help you Manage your finances effortlessly. Our app offers secure, user-friendly features to help you bank with ease
          </p>
        </div>

        <div className="heroLinks">
          <a href="#" className='join'>Join us today</a>
          <a href="#" className='bankNow'>Bank now</a>
        </div>

        <div className="ratings">
          <div className="activity">
            <h2>75.2%</h2>
            <p>Average daily activity</p>
          </div>

          <div className="users">
            <h2>~20k</h2>
            <p>Average daily users</p>
          </div>
        </div>

      </div>

      <div className="left">
        <div className="me"></div>
      </div>
    </section>
  )
}

export default Hero