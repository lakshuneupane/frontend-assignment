import React from 'react'
import delivery from '../../assets/delivery.png'
import payment from '../../assets/payment.png'
import gift from '../../assets/gift.png'

import './services.css'

const Services = () => {
  return (
    <div id='services'>
      <div className='our-service'><p>Our Services</p></div>
      <div className='delivery'>
        <h1>Free Delivery:</h1>
        <p>At VirtualVibe, we believe in providing a seamless and enjoyable shopping experience for our customers.<br/> As part of our commitment to exceptional service, we are thrilled to offer free delivery on eligible orders.<br /> When you shop with us, you can take advantage of our free delivery service for qualifying purchases.</p>
        <img src={delivery} alt='delivery'/>
      </div>
      <div className='payment'>
        <h1>Secure Payment and Fast Shipping:</h1>
        <p>At VirtualVibe, we prioritize security and convenience. We offer secure payment options,<br /> ensuring that your transactions are protected. Additionally, our efficient logistics network <br />ensures fast and reliable shipping to deliver your purchases to your doorstep as quickly as possible.</p>
        <img src={payment} alt='payment'/>
      </div>
      <div className='gift'>
        <h1>Gift Services:</h1>
        <p>VirtualVibe provides options for gift wrapping and personalized messages, making it easy to <br /> send thoughtful gifts to your loved ones on special occasions.</p>
        <img src={gift} alt='gift'/>
      </div>
    </div>
  )
}

export default Services