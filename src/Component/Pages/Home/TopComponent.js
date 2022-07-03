import React from 'react'
import './Home.css'
import Card from './Cards/Card/Card'
import MainCard from '../Home/Cards/MainCard/MainCard'
import RightSmallCard from './Cards/RightSmallCard/RightSmallCard'
import cardMain from '/home/vishal/Desktop/weekend-app/src/Assets/img/card-Main.jpg'
import sm1 from '/home/vishal/Desktop/weekend-app/src/Assets/img/sm1.jpg'
import sm2 from '/home/vishal/Desktop/weekend-app/src/Assets/img/sm-2.jpg'
import sm3 from '/home/vishal/Desktop/weekend-app/src/Assets/img/sm-3.jpg'
import sm4 from '/home/vishal/Desktop/weekend-app/src/Assets/img/sm-4.jpg'
import smsm1 from '/home/vishal/Desktop/weekend-app/src/Assets/img/sm2-1.jpg'
import smsm2 from '/home/vishal/Desktop/weekend-app/src/Assets/img/sm2-2.jpg'
import smsm3 from '/home/vishal/Desktop/weekend-app/src/Assets/img/sm2-3.jpg'
import smsm4 from '/home/vishal/Desktop/weekend-app/src/Assets/img/sm2-6.jpg'


function TopComponent() {
  return (
      <>
      <div className="container">
          <div className="main-component">
              <div className="d-flex">
                  <div className="row">
                  <div className="col-5 large-component">
                  <MainCard img={cardMain} />
                  </div>
                  <div className="col-2">
                      <Card img={sm1} />
                      <Card img={sm2} />
                  </div>
                  <div className="col-2">
                  <Card img={sm3} />
                  <Card  img={sm4}/>
                  </div>
                  <div className="col-2">
                  <RightSmallCard img={smsm1} />
                  <RightSmallCard img={smsm2} />
                  <RightSmallCard img={smsm3} />
                  <RightSmallCard img={smsm4} />
                  <RightSmallCard img={smsm1} />
                  </div>
                  </div>
              </div>
          </div>
      </div>
      </>
  )
}

export default TopComponent