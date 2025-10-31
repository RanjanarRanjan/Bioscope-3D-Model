import React from 'react'
import Headers from './Header'
//import "../components/css/Style.css"
import "../App.css"
import SpotLight from './Spotlight'
import BoxGridAnatomy from './BoxGridAnatomy'

const Home = () => {
  return (
    <div>
      <Headers />
      <SpotLight />
      <BoxGridAnatomy />
    </div>
  )
}

export default Home