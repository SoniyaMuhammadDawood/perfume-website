
import React from 'react'
import Promotions from './components/Promotions'
import Attar from './components/Attar'
import Hero from './components/Hero'
import Unique from './contact/Unique'

export default function Home() {
  return (
    <div>
     
   <Hero/>


        {/* Unique Collection */}
        <Unique/>

        {/* Attar Collection */}
        <Attar/>

      <Promotions/>
  
    </div>
  )
}