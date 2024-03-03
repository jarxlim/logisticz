import React from 'react'
import Pic2 from "../assets/pic-work-02.jpg";
import Pic3 from '../assets/pic-blog-03.jpg';
import Pic4 from '../assets/pic-person-02.jpg';

function Card2() {
                const cardData = [
                    {image: Pic2, title:'Air Freight', content:"Air freight Some quick example text to build on the card title and make up the bulk of the card's solutions..."},
                    {image: Pic3, title:'Sea Freight', content:"sea freight Some quick example text to build on the card title and make up the bulk of the card's content..."},
                    {image: Pic4, title:'Land Freight', content:"Land freight Some quick example text to build on the card title and make up the bulk of the card's content..."},
                    {image: Pic2, title:'Warehousing', content:"Air freight Some quick example text to build on the card title and make up the bulk of the card's solutions..."},
                    {image: Pic3, title:'Door to Door Delivery', content:"sea freight Some quick example text to build on the card title and make up the bulk of the card's content..."},
                    {image: Pic4, title:'Packaging & Storage', content:"Land freight Some quick example text to build on the card title and make up the bulk of the card's content..."},
                ]
                return (
                    <>
                    <div className="row">
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
            