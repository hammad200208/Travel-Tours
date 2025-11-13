import React from 'react'
import Hero from '../Destination/Hero.jsx'
import DestinationCards from '../Destination/DestinationCards.jsx'
import Featured from '../Destination/Featured.jsx'
import Explore from '../Destination/Explore.jsx'
import Found from '../Destination/Found.jsx'

const Destination = () => {
  return (
    <>
      <Hero />
      <DestinationCards />
      <Featured />
      <Explore />
      <Found />
    </>
  )
}

export default Destination
