import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-text">
            <h1> We Ensure Better Education For A Better World!</h1>
            <p> Our cutting-edge curriculam is designed to empower students with knowledge, skills,and experiences needed to excel in dynamic field of education.</p>
            <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero