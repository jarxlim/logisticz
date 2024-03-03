import React from 'react';
import About from '../assets/pic-work-03.jpg';
import Card from './Card';
import Form from './Form';
import Icon1 from '../assets/favicon.jpg'
import Icon2 from '../assets/holberton-logo.jpeg'


function Homepage() {
  return (
    <>
      <div className='hero'>
        <div className='container text-light text-center pt-5'>
          <h1 className='pt-5' style={{marginTop: '60px'}}>Easy & Quick Cargo Shipping Services</h1>
          <p className="subtitle">Book low cost sea freight services. Get an instant quote</p>
          <a href='' className="btn btn-danger text-light">Track Goods</a>
        </div>
      </div>

      <div className='container pt-5'>
        <div className='text-center'>
          <h2>Welcome Crystal Shipment</h2>
          <div className="bg-red mx-auto"></div>

          <p className='pt-3'>Crystal Shipment is more than logistics. We can also optimize your packaging, manage your materials sourcing, and so much.</p> 
        </div>

        <div className="row" data-aos='fade-up'>
          <div className="col-md-6">
            <img src={About} className= 'img-fluid rounded' alt="" />
          </div>

          <div className="col-md-6">
            <p className='text-danger'>TRANSPORTATION COMPANY</p>
            <h2>We Provide Full Range Logistics Solution</h2>
            <p>We strongly believe that pursuing all of these goals is our interest of all our stakeholders and customers, employees, investors and the planet as a whole. We add value to cargo peoples interaction with us, We strongly believe that pursuing all of these goals is our interest of all our stakeholders and customers, employees, investors and the planet as a whole.</p>
            <a href="" className="btn btn-danger">Learn More</a>
          </div>
        </div>
      </div>

      <div className="container pt-5"> 
        <div className="text-center">
          <p className="text-danger">TYPES OF LOGISTICS</p>
          <h2>Covering All Looistics Field</h2>
        </div>

        <Card/>

        <div className="text-center">
          <a href="/service" className="btn btn-danger">Load more</a>
        </div>

      </div>

      <div className="bg-warning mt-5" style={{minHeight: '200px', padding: '20px 0'}}>
        <div className="container pt-5">
          <div className="row d-flex justify-content-center">
            <div className="col-md-8">
              <h2>Delivering your worlf one package at a time</h2>
              <p>Crystal Ahipmebt is more than just Logistics.</p>
            </div>
            <div className="col-md-4 text-md-end text-sm-end">
              <a href="" className="btn btn-danger">Request a Quote</a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5" data-aos='fade-up'>
        <div className="row">
          <div className="col-md-6">
            <h2>WHY CHOOSE US?</h2>
            <div className="d-flex mt-3">
                <div className="flex-grow-1 me-2">
                  <img src={Icon1} style= {{width: '60px', borderRadius: '50px'}} alt="" />
                </div>
                <div className="flex-grow-1 ms-2">
                  <h4>Global supply chain solution</h4>
                  <p>Efficiently unleash crossmedia information without crossmedia value</p>
                </div>
              </div>

              <div className="d-flex mt-3">
                <div className="flex-grow-1 me-2">
                  <img src={Icon2} style= {{width: '60px', borderRadius: '50px'}} alt="" />
                </div>
                <div className="flex-grow-1 ms-2">
                  <h4>Carefully handling valuable goods</h4>
                  <p>Efficiently unleash crossmedia information without crossmedia value</p>
                </div>
              </div>

              <div className="d-flex mt-3">
                <div className="flex-grow-1 me-2">
                  <img src={Icon1} style= {{width: '60px', borderRadius: '50px'}} alt="" />
                </div>
                <div className="flex-grow-1 ms-2">
                  <h4>Mobile shipment tracking</h4>
                  <p>Efficiently unleash crossmedia information without crossmedia value</p>
                </div>
              </div>

          </div>
          <div className="col-md-6">
            <h2>REQUEST A QUOTE</h2>
            <Form/>
          </div>
        </div>
      </div>

    </>
  )
}

export default Homepage