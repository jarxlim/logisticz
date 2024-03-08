import React from 'react'
import Pic2 from "../assets/r8.png";
import Pic3 from '../assets/r9.png';
import pic5 from '../assets/r11.png';
import Pic4 from '../assets/r10.png';

function Footer() {
  return (
    <>
    <div className="bg-dark text-light mt-5 py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h4>CRYSTAL SHIPMENT</h4>
            <p>Crystsl shipment is a global supplier of transport and logistic solutions. we have offices in more than 20 countries and international network of partners and agents</p>
          </div>
          <div className="col-md-3">
            <h4>QUICK LINKS</h4>
            <ul className="list-unstyled">
              <li><a href="" className='text-light text-decoration-none'>All Services</a></li>
              <li><a href="" className='text-light text-decoration-none'>Air Freight</a></li>
              <li><a href="" className='text-light text-decoration-none'>Land Freight</a></li>
              <li><a href="" className='text-light text-decoration-none'>Sea Freight</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>PHOTO GALLERY</h4>
            <div className="d-flex mt-3">
              <div className="flex-grow-1 me-2">
                <img src={pic5} alt="" className='img-fluid rounded' />
                </div>
                <div className="flex-grow-1 ms-2">
                <img src={Pic4} alt="" className='img-fluid' />
                </div>
            </div>

            <div className="d-flex mt-3">
              <div className="flex-grow-1 me-2">
                <img src={Pic2} alt="" className='img-fluid' />
                </div>
                <div className="flex-grow-1 ms-2">
                <img src={Pic3} alt="" className='img-fluid' />
                </div>
            </div>

          </div>
          <div className="col-md-3">
            <h4>OUR NEWSLETTER</h4>
            <p>Sign up today for tips and latest news and exclusive special offers.</p>
            <input type="email" className='form-control mb-3 mt-3' placeholder='Enter your email here' />
            <button className="btn btn-danger">Submit</button>
          </div>
        </div>
      </div>
      <p className='text-center'>© Copyright 2023 All Right Reserved.</p>
    </div>
    </>
  )
}

export default Footer