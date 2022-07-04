import React from 'react'
import logo from '/home/vishal/Desktop/weekend-app/src/Assets/img/footer2.webp'
import './Footer.css'

function Footer() {
  return (
      <>
      <div className="container-fluid footer-container">
          <div className="footer-header">
          <div className="container ">
              <div className="footer">
                  <div className="d-flex justify-content-between ">
                      <div className="d-flex justify-content-between mt-3 ">
                      <div className="footer-img">
                          <img src={logo} alt="not found" className='footer-img-data' />
                      </div>
                      <div className="footer-data">
                      <p className='logo-heading-footer mx-2'>Coronavirus</p>
       <p className='logo-heading-footer1 mx-2'>Medicine <span className='logo-span-data'>PRO</span></p>
                      </div>
                      </div>
                      <div className="d-flex footer-icons">
                      <i class="fa-brands fas-twitter"></i>
                      <i class="fa-brands fas-facebook-f"></i>
                      <i class="fa-brands fas-instagram"></i>
                      <i class="fa-brands fas-youtube"></i>
                      </div>
                  </div>
                  <div className="d-flex justify-content-center footer-final-data">
                      <div className="footer-behaviour">
                          <p className='beha-heading'> Behaviour</p>
                          <p className='beha-footer-data'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                          <p className='beha-footer-data'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                          <p className='beha-footer-data'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                          <p className='beha-footer-data'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                          <p className='beha-footer-data'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                      </div>
                      <div className="prevention">
                      <p className='beha-heading'> Prevention</p>
                      <p className='beha-footer-data'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                          <p className='beha-footer-data'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                          <p className='beha-footer-data'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                          <p className='beha-footer-data'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                          <p className='beha-footer-data'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                      </div>
                      <div className="strategy">
                      <p className='beha-heading'> Strategy</p>
                      <p className='beha-footer-data'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                          <p className='beha-footer-data'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                          <p className='beha-footer-data'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                          <p className='beha-footer-data'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                          <p className='beha-footer-data'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                      </div>
                      <div className="Network">
                      <p className='beha-heading'> Network</p>
                      <p className='beha-footer-data'>Home</p>
                      <p className='beha-footer-data'>Coronavirus</p>
                      <p className='beha-footer-data'>Vaccine</p>
                      <p className='beha-footer-data'>Treatment</p>
                      <p className='beha-footer-data'>Research</p>
                      <p className='beha-footer-data'>Impact</p>
                      <p className='beha-footer-data'>Global</p>
                      </div>
                      <div className="row"><div className="col-12">
                      <div className="Stay-inTouch">
                      <p className='beha-heading '> Stay in touch</p>
                      <p className='beha-footer-data '>To be updated with all the latest news, offers and special announcements.</p>
                      <input type="email" id="inputPassword5 " class="input-type" aria-describedby="passwordHelpBlock" />
                      {/* <span className='footer-btn'> Sign in</span> */}
                      <button className='footer-btn'>Sign in</button>
                      

                      </div>  
                      </div></div>
                  </div>
              </div>
          </div>
          </div>
      </div>
      </>
  )
}

export default Footer