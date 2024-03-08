import React from 'react'

function Tracking() {
  return (
    <>
    <div className="bg-cover">
      <div className="text-center text-light">
        <h1 className="pt-5">Tracking</h1>
        <p>Home <i className="fa fa-arrow-right ms-3 me-3"></i>Tracking</p>
      </div>
    </div>

    <div className="container" >
      <div className="row">
        <div className="col-md-6">
          <h2 className='mt-4'>TRACK YOUR SHIPMENT</h2>
          <div className="bg-red mt-3 mb-3"></div>
          <p>If you require maximum visibility to your Freight transactions, contact our logistic customer team or you can track your cargo by using below tracking system.</p>
        </div>
        <div className="col-md-6">
        <input type="" className='form-control mb-4 mt-4' placeholder='Enter your tracking ID here' style={{width:'300px'}} />
            <button className="btn btn-danger">Track</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Tracking