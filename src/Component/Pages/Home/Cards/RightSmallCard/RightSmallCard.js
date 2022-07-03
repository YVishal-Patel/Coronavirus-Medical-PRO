import React from 'react'
import '../Card/Card.css'

function RightSmallCard({img}) {
  return (
      <>
      <div class="d-flex mt-2  small-card">
  <div class="">
    <p class="card-text mx-2">Some quick example text to build on the card </p>
  </div>
  <img src={img} class="card-img-top1 mx-2 mb-2 " alt="not found"/>
</div>
      </>
  )
}

export default RightSmallCard