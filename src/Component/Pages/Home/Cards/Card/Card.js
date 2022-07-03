import React from 'react'
// import  sm1 from '/home/vishal/Desktop/weekend-app/src/Assets/img/sm1.jpg'
import './Card.css'

function Card({img}) {
  return (
      <>
      <div className="card-data my-2">
   <img src={img} className="card-img-top" alt='not found' />
   <p className='small'> <small className='sm-behaviour '>Behavior</small></p>
   <div className="card-body">
     <p className=" card-body-text">Some quick example text to build on the card title and make.  
     </p>
     
   </div>
 </div>
       </>
  )
}

export default Card

