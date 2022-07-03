import React from 'react'
import smsm4 from '/home/vishal/Desktop/weekend-app/src/Assets/img/sm2-6.jpg'
import '../Cards/Card/Card.css'

function QuickCard({img,type}) {
  return (
      <>
      <div class="demo-card my-5" >
  <img src={img} class="image" alt="not found"/>
  <div class="demo-card-body ">
    <p class="card-text-data mx-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi placeat, delectus reiciendis.</p>
  </div>
  <p className='position mx-4'>{type}</p>
</div>
      </>
  )
}

export default QuickCard