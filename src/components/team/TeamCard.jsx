import React from 'react';
import './team.css';
import { teamCard } from '../../dummydata';

export default function App() {
  return (
    <div className="team container">
      {teamCard.map((val) => (
        <div key={val.id} className="items shadow">
          <div className="img">
            <img src={val.cover} alt={val.name} />
            <div className="overlay">
              <i className='fab fa-facebook-f icon'></i>
              <i className='fab fa-instagram icon'></i>
              <i className='fab fa-twitter icon'></i>
              <i className='fab fa-tiktok icon'></i>
              <div className="details">
                <h2>{val.name}</h2>
                <p>{val.role}</p>
              </div>
          </div>
            </div>
        </div>
      ))}
    </div>
  );
}
