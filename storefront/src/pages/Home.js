import React from 'react'
import Games from '../components/Games'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Slider />
        <Games />
    </div>
  )
}

export default Home