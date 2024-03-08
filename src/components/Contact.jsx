import React from 'react'
import Form from './Form'
import icon1 from '../assets/Vector.png'
import icon2 from '../assets/v1.png'
import icon3 from '../assets/sms.png'

function Contact() {
  return (
    <>
    <div className="bg-cover">
      <div className="text-center text-light">
        <h1 className="pt-5">Contact</h1>
        <p>Home <i className="fa fa-arrow-right ms-3 me-3"></i>Contact</p>
      </div>
    </div>

    <div className="container mt-5" >
      <div className="row">
        <div className="col-md-6">
          <p>Kindly call us or join our support group on WhatsApp.</p>
          <p><img src={icon1} alt="" className='me-3'/> +234 9072211222</p>
          <p><img src={icon2} alt="" className='me-3'/> +234 8167000077</p>
          <p><img src={icon3} alt="" className='me-3'/> info@crystalshipment.com</p>
    
        </div>
        <div className="col-md-6">
          <Form/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact