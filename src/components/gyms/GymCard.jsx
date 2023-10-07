import React from "react"
import './style.css'
import image from './cup.jpg'

function GymCard() {
  return (
    // <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<div className="gym">
<div class="container">
  <img src={image} alt="Avatar" class="pic"/>

  <div class="overlays">
    <div class="texts">Hello World</div>
    <div class="texts">Gym Growth</div>
    <p><button>More Info</button></p>
  </div>
</div>
</div>
  )
}

export default GymCard


