import React from 'react'
import QuickCard from '../Cards/QuickCard'
import '../Home.css'
import img1 from '/home/vishal/Desktop/weekend-app/src/Assets/img/sm2-7.jpg'
import img2 from '/home/vishal/Desktop/weekend-app/src/Assets/img/ar-2.jpg'
import img3 from '/home/vishal/Desktop/weekend-app/src/Assets/img/ar-3.jpg'
import img4 from '/home/vishal/Desktop/weekend-app/src/Assets/img/ar-4.jpg'
import img5 from '/home/vishal/Desktop/weekend-app/src/Assets/img/ar-5.jpg'
import img6 from '/home/vishal/Desktop/weekend-app/src/Assets/img/ar-6.jpg'

function QuickRead() {
  return (
      <>
      <div className="container-fluid quick-read">
          <div className="container">
              <div className="d-flex justify-content-between quick-read-header">
              <div className="quick-heading">
                  <p className='quick-head'>Quick Read</p>
              </div>
              <div className="quick-navs">
              <div className="quick-nav">
                  <ul>
                      <li><a href="#">all</a></li>
                      <li><a href="#">facts</a></li>
                      <li><a href="#">Supplies</a></li>
                      <li><a href="#">global</a></li>
                      <li><a href="#">vaccine</a></li>
                      <li><a href="#">treatment</a></li>
                  </ul>
              </div>
              </div>
              </div>
              <div className="new-card">
                  <div className="row">
                      <div className="col-4">
                          <QuickCard img={img1} type="research"  />
                      </div>
                      <div className="col-4">
                      <QuickCard img={img2} type="behavior" />
                      </div>
                      <div className="col-4">
                      <QuickCard img={img3} type="research" />
                      </div>
                      <div className="col-4 mar-car">
                      <QuickCard img={img4} type="behavior" />
                      </div>
                      <div className="col-4 mar-car">
                      <QuickCard img={img5} type="research" />
                      </div>
                      <div className="col-4 mar-car">
                      <QuickCard img={img6} type="research" />
                      </div>
                  </div>
              </div>
          </div>
      </div>
      </>
  )
}

export default QuickRead