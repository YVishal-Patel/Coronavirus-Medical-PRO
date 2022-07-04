import React from 'react'
import logo from '/home/vishal/Desktop/weekend-app/src/Assets/img/logo.jpg'
import './Footer.css'

function Footer() {
  return (
      <>
      <div className="container-fluid footer-container">
          <div className="container ">
              <div className="footer">
                  <div className="d-flex justify-content-center">
                      <div className="d-flex">
                      <div className="footer-img">
                          <img src={logo} alt="not found" />
                      </div>
                      <div className="footer-data">
                      <p className='logo-heading'>Coronavirus</p>
       <p className='logo-datas'>Medicine <span className='logo-span-data'>PRO</span></p>
                      </div>
                      </div>
                      <div className="d-flex footer-icons">
                      <i class="fa-brands fa-twitter"></i>
                      <i class="fa-brands fa-facebook-f"></i>
                      <i class="fa-brands fa-instagram"></i>
                      <i class="fa-brands fa-youtube"></i>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      </>
  )
}

export default Footer