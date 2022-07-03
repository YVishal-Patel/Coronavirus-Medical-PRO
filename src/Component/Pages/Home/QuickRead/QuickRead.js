import React from 'react'
import '../Home.css'

function QuickRead() {
  return (
      <>
      <div className="container-fluid quick-read">
          <div className="container">
              <div className="d-flex justify-content-between quick-read-header">
              <div className="quick-heading">
                  <p className='quick-head'>Quick Read</p>
              </div>
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
      </div>
      </>
  )
}

export default QuickRead