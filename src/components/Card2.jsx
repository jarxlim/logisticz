import React from 'react'
import Pic2 from "../assets/r2.png";
import Pic3 from '../assets/r3.png';
import Pic4 from '../assets/r4.png';
import pic5 from '../assets/Rectangle 3 (1).png';
import Pic6 from '../assets/Rectangle 3 (2).png';
import pic7 from '../assets/r10.png'

function Card2() {
                const cardData = [
                    {image: Pic2, title:'Air Freight', content:"As a leader in global air freight forwarding, OIA Global excels in providing tailored transportation..."},
                    {image: Pic3, title:'Sea Freight', content:"Sea Freight plays perhaps the most vital role in most transportation and supply chain a solutions..."},
                    {image: Pic4, title:'Land Freight', content:"Cargo are transported at some stage of their journey along the world’s roads where we give..."},
                    {image: pic5, title:'Warehousing', content:"Package and store your things effectively and securely to make sure them in storage, have certif...Read more"},
                    {image: Pic6, title:'Door to Door Delivery', content:"Our expertise in transport management and planning allows us to design a solution. hand...Read more."},
                    {image: pic7, title:'Packaging & Storage', content:"Package and store your things effectively and securely to make sure them in storage, We... Read more"},
                ]
                return (
                    <>
                    <div className="row mx-5 " data-aos='fade-up'>
                    {cardData.map((card, index) => (
                        <div className="col-md-4 mb-5">
                        <div className="card">
                            <img src={card.image} className="card-img-top" style={{height: '12rem'}} alt="..."/>
                            <div className="card-body">
                                <h4 className="card-title">{card.title}</h4>
                                <p className="card-text">{card.content}<a href="" className="text-danger text-decoration">Read more</a></p>
                            </div>
                        </div>
                        </div>
                    ))}
                    </div>
                </>
              )
            }
    export default Card2
            