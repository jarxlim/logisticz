import React from 'react'
import Pic2 from "../assets/pic-work-02.jpg";
import Pic3 from '../assets/pic-blog-03.jpg';
import Pic4 from '../assets/pic-person-02.jpg';

function Card() {
  return (
    <>
        <div className="row mb-3 mt-4" data-aos='fade-up'>
          <div className="col-md-4">
            <div className="card" style={{width: '18rem'}}>
              <img src={Pic2} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h4 className="card-title">Air Freight</h4>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content... <a href="" className="text-danger text-decoration">Read more</a></p>
              </div>
            </div>
          </div>
          <div className="col-md-4" data-aos='fade-up'>
            <div className="card" style={{width: '18rem'}}>
                <img src={Pic3} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h4 className="card-title">Land Freight</h4>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content... <a href="" className="text-danger text-decoration">Read more</a></p>
                </div>
              </div>
          </div>
          <div className="col-md-4" data-aos='fade-up'>
            <div className="card" style={{width: '18rem'}}>
                <img src={Pic4} className="card-img-top" style={{height: '12rem'}} alt="..."/>
                <div className="card-body">
                  <h4 className="card-title">Sea Freight</h4>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content... <a href="" className="text-danger text-decoration">Read more</a></p>
                </div>
              </div>
          </div>
        </div>

    </>
  )
}

export default Card

{/* writing code for it to make shorter */}
        
//         function Card() {
//             const cardData = [
//                 {image: Pic2, title:'Air Freight', content:"Air freight Some quick example text to build on the card title and make up the bulk of the card's solutions..."},
//                 {image: Pic3, title:'Sea Freight', content:"sea freight Some quick example text to build on the card title and make up the bulk of the card's content..."},
//                 {image: Pic2, title:'Land Freight', content:
//                 "Land freight Some quick example text to build on the card title and make up the bulk of the card's content..."},
//             ]
//             return (
//                 <>
//                 <div className="row">
//                 {cardData.map((card, index) => (
//                     <div className="col-md-4">
//                     <div className="card">
//                         <img src={card.image} className="card-img-top" alt="..."/>
//                         <div className="card-body">
//                             <h4 className="card-title">{card.title}</h4>
//                             <p className="card-text">{card.content}<a href="" className="text-danger text-decoration">Read more</a></p>
//                         </div>
//                     </div>
//                     </div>
//                 ))}
//                 </div>
//             </>
//           )
//         }
// export default Card
        