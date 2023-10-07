import React from 'react'
import Hero from './hero/Hero'
import AboutCard from '../about/AboutCard'
import TeamCard from '../team/TeamCard'
// import Gym from '../gyms/Gym'


const Home = () => {
  return (
    <div>
      <Hero/>
      <AboutCard/>
      <TeamCard/>
      {/* <Gym/> */}
    </div>
  )
}

export default Home
