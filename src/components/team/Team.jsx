import React from 'react'; 
import TeamCard from './TeamCard'
import Back from '../common/back/Back'

const Team = () => {
  return (
    <>
      <Back title = 'Team'/>
      <section className="team padding">
        <div className="container grid">
        <TeamCard />
        </div>
      </section>
    </>
  )
}

export default Team
