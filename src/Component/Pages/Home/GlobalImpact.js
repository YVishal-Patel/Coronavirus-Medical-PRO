import React from 'react'
import '../Home/Home.css'
import mainImg from '/home/vishal/Desktop/weekend-app/src/Assets/img/add1.jpg'
 import image from '/home/vishal/Desktop/weekend-app/src/Assets/img/sm2-7.jpg'
 import img from '/home/vishal/Desktop/weekend-app/src/Assets/img/sm-9.jpg'
 import img1 from '/home/vishal/Desktop/weekend-app/src/Assets/img/sm-8.jpg'
 import help from '/home/vishal/Desktop/weekend-app/src/Assets/img/help.jpg'
 import ar1 from '/home/vishal/Desktop/weekend-app/src/Assets/img/ar-1.jpg'
 import ar2 from '/home/vishal/Desktop/weekend-app/src/Assets/img/ar-2.jpg'
 import ar3 from '/home/vishal/Desktop/weekend-app/src/Assets/img/ar-3.jpg'
 import ar4 from '/home/vishal/Desktop/weekend-app/src/Assets/img/ar-4.jpg'
 import ar5 from '/home/vishal/Desktop/weekend-app/src/Assets/img/ar-5.jpg'
 import ar6 from '/home/vishal/Desktop/weekend-app/src/Assets/img/ar-6.jpg'
 import skel from '/home/vishal/Desktop/weekend-app/src/Assets/img/skel.jpg'
 import homeMain from '/home/vishal/Desktop/weekend-app/src/Assets/img/home-main.jpg'
 import QuickCard from './Cards/QuickCard'
 import PreventionCard from './Cards/PreventionCard/PreventionCard'
import RightSmallCard from './Cards/RightSmallCard/RightSmallCard'

function GlobalImpact() {
  return (
      <>
      <div className="container">
          <div className="d-flex justify-content-center global-heading">
              <div className="heading">Global Impact</div>
          </div>
          <div className="global-impact">
                  <div className="row">
                      <div className="col-3 addsence">
                      <PreventionCard img={help} />
                      </div>
                      <div className="col-6">
                      <QuickCard img={img} type="Prevention" />
                      </div>
                      <div className="col-3 new-global-card">
                      {/* <img src={mainImg} alt="not found" /> */}
                      <RightSmallCard  img={ar1}/>
                      <RightSmallCard  img={ar2}/>
                      <RightSmallCard  img={ar3}/>
                      <RightSmallCard  img={ar4}/>
                      <RightSmallCard  img={ar5}/>
                      <RightSmallCard  img={ar6}/>
                      <RightSmallCard  img={help}/>
                      <RightSmallCard  img={homeMain}/>
                    
                      </div>
                      <div className="col-6 global-impact-data2">
                      
                      <QuickCard img={img} type="Prevention" />
                      </div>
                      <div className="col-3  global-impact-data">
                          <PreventionCard img={img1} /> 
                      </div>
                      <div className="col-3 global-impact-data1">
                      </div>
                  </div>
          </div>
      </div>
      </>
  )
}

export default GlobalImpact