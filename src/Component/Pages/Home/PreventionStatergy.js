import React from 'react'
import './Home.css'
 import mainImg from '/home/vishal/Desktop/weekend-app/src/Assets/img/add1.jpg'
 import image from '/home/vishal/Desktop/weekend-app/src/Assets/img/sm2-7.jpg'
 import img from '/home/vishal/Desktop/weekend-app/src/Assets/img/sm-9.jpg'
 import img1 from '/home/vishal/Desktop/weekend-app/src/Assets/img/sm-8.jpg'
 import img2 from '/home/vishal/Desktop/weekend-app/src/Assets/img/sm-4.jpg'
import QuickCard from './Cards/QuickCard'
import PreventionCard from './Cards/PreventionCard/PreventionCard'


function PreventionStatergy() {
  return (
      <>
      <div className="container-fluid PreventionStatergy">
          <div className="container">
              <div className="prevention">
                  <div className="d-flex justify-content-center heading">
                      <p>Prevention Strategy</p>
                  </div>
                  </div>
                  <div className="row">
                      <div className="col-3 addsence ">
                          <img src={mainImg} alt="not found" />
                      </div>
                      <div className="col-6 main-prevention-cont">
                      <QuickCard img={img} type="Prevention" />
                      </div>
                      <div className="col-3 small-prev-card">
                          <PreventionCard img={image} />
                      </div>
                      <div className="col-3">
                      </div>
                      <div className="col-3 small-prev-card-data">
                          <PreventionCard img={img1} />
                      </div>
                      <div className="col-6 small-prev-card-data1">
                      <QuickCard img={image} type="Prevention" />
                      </div>
                  </div>
          </div>
      </div>
      </>
  )
}

export default PreventionStatergy