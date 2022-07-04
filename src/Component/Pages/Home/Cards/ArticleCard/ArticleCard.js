import React from 'react'
import '../Card/Card.css'

function ArticleCard({img}) {
  return (
      <>
       <div className="card-data-prevention">
   <img src={img} className="card-img-top" alt='not found' />
   <p className='small-article'> <small className='sm-behaviour-article '>Prevention</small></p>
   <div className="card-body">
     <p className=" card-body-article">Some quick example text to build on the card title and make.  
     </p>
     
   </div>
 </div>
      </>
  )
}

export default ArticleCard