import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <>
      <section className="newletter">
        <div className="container flexSB">
            <div className="left row">
                <h1>Newsletter - stay tuned and get the latest updates</h1>
                <span>far far away, behind the word mountains</span>
            </div>
            <div className="right row">
                <input type="text" placeholder='Enter your email'/>
                <i className='fa fa-paper-plane'></i>
            </div>
        </div>
      </section>
      <footer>
        <div className="container padding">
            <div className="box logo">
                <h1>GYM CITY</h1>
                <span>gyming at your convenience</span>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam ipsa aut, quae ex laboriosam esse molestias earum illum soluta tempora.</p>
                <i className='fab fa-facebook-f icon'></i>
                <i className='fab fa-instagram icon'></i>
                <i className='fab fa-twitter icon'></i>
            </div>
            <div className="box link">
                <h3>Quick Links</h3>
                <ul>
                    <li>About Us</li>
                    <li>About Us</li>
                    <li>About Us</li>
                    <li>About Us</li>
                    <li>About Us</li>
                </ul>
            </div>
            <div className="box last">
                <h3>Have a question?</h3>
                <ul>
                    <li>
                        <i className="fa fa-map"></i>
                        ASHESI 
                    </li>
                    <li>
                        <i className="fa-solid fa-phone"></i>
                        +25458458558
                    </li>
                    <li>
                        <i className="fa fa-paper-plane"></i>
                        example@gmail.com
                    </li>
                </ul>
            </div>
        </div>
      </footer>
      <div className="legal">
        <p>
            Copyright @2023 All right reserved <i className="fa fa-heart"> by D.E GEEKS</i>
        </p>
      </div>
    </>
  )
}

export default Footer
