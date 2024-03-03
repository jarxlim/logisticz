import React from 'react'
import Card2 from './Card2'
import Pic7 from '../assets/pic-person-03.jpg'

function Service() {
  return (
    <>
    <div className="bg-cover">
      <div className="text-center text-light">
        <h1 className="pt-5">Service</h1>
        <p>Home <i className="fa fa-arrow-right ms-3 me-3"></i>Service</p>
      </div>
    </div>
    <div className="container mt-5"></div>
    <Card2/>
    
    <div className="container" data-aos='fade-up'>
      <div className="row">
        <div className="col-md-6">
          <img src={Pic7} alt="" className='img-fluid' />
        </div>
        <div className="col-md-6">
          <h2>THE COMPLETE SOLUTION</h2>
          <div className="bg-red mb-3"></div>
          <p>Our Warehousing services are known nationwide. freight Some quick example text to build on the card title and make up the bulk of the card's solutions. freight Some quick example text to build on the card title and make up the bulk of the card's solutions. freight Some quick example text to build on the card title and make up the bulk of the card's solutions</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Service