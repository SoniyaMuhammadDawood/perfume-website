
import React from 'react'
import Promotions from './components/Promotions'
import Attar from './components/Attar'
import Unique from './components/Unique'
import Hero from './components/Hero'

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