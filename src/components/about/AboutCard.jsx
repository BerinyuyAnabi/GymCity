import React from 'react'
import Title from '../common/title/Title'
import {homeAbout} from '../../dummydata'
import  './about.css'

const AboutCard = () => {
  return (
    <>
      <section className="aboutHome">
        <div className="container flexSB">
            <div className="left row">
                <img src="./images/gymgirl.jpeg" alt="" />
            </div>
            <div className="right row">
                <Title subtitle='GET FIT' title='OUR VALUE'/>
                <div className="items">
                    {homeAbout.map((val)=>(
                        <div className="item flexSB">
                            <div className="img">
                            <i className={val.iconClass} aria-hidden="true"></i>
                            </div>
                            <div className="text">
                                <h2>{val.title}</h2>
                                <p>{val.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default AboutCard
