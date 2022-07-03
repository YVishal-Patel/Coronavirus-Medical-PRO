import React from 'react'
import '../Card/Card.css'

function MainCard({img}) {
  return (
      <>
      <div className="card-data my-2">
   <img src={img} className="card-img-top" alt='not found' />
   <p className='small-main'> <small className='sm-behaviour-maincard '>Behavior</small></p>
   <div className="card-body1">
     <p className=" card-body-text-main">Some quick example text to build on the card title and make.  
     </p>
     <p className="time">APRIL 8,2020</p>
     <p className='main-card-description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, nostrum! Enim vero soluta magni illum? Dolore adipisci illum sunt tenetur?</p>
     
   </div>
 </div>
      </>
  )
}

export default MainCard