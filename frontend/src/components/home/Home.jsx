import React from 'react'
import Hero from '../hero/Hero'
import Links from '../links/Links'

function Home() {
  return (
    <article className='mainHome'>
        {<Hero />}
        {<Links />}
    </article>
  )
}

export default Home