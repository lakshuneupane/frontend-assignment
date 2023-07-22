import React from 'react'
import './about.css'

import about from '../../assets/about.png'

const About = () => {

  return (
    <div className='about'>
        <div className='about-content'>
            <h1>Virtual<span className='gradient__text'>Vibe</span></h1>
            <p>At VirtualVibe, we believe that shopping is more than just a transaction—it's an opportunity to discover new trends, express your individuality, and find products that enhance your lifestyle.</p><br />
            <p>At VirtualVibe, we are dedicated to bringing you a diverse and exciting online shopping experience. Our platform is your one-stop destination for a wide range of products, including clothing, electronics, watches, and much more.</p> <br />
            <p>What sets VirtualVibe apart is our commitment to delivering exceptional service and customer satisfaction. Our user-friendly website is designed to provide you with a seamless and intuitive shopping experience. </p><br/>
            <p>Thank you for choosing VirtualVibe as your preferred online shopping destination. We are excited to serve you and provide you with a virtual shopping experience that is vibrant, diverse, and filled with endless possibilities.</p><br/>
            <h3>Welcome to the VirtualVibe community!</h3><br/>
            <button><a href='/products'>Shop Now</a></button>
        </div>
        <div className='about-image'>
          <img 
          src={about}
          alt='about'
          />
        </div>
    </div>
  )
}

export default About