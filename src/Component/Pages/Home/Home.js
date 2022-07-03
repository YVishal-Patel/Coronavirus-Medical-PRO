import React from 'react'
import mainImg from '/home/vishal/Desktop/weekend-app/src/Assets/img/home-main.jpg'
import './Home.css'
import TopComponent from './TopComponent'
import QuickRead from './QuickRead/QuickRead'

function Home() {
  return (
  <>
  <div className="container-fluid home">
    <div className="main-img">
  {/* <img src={mainImg} alt="not found" className='main-img' /> */}
    </div>
    <div className="container">
     <div className="main-container">
       <div className=" my-3">
       <button className="main-btn">PREVENTION</button>
       </div>
       <div className="my-3">
       <h3 className="main-heading ">Here is why you should <br /> be avoiding crowds <br /> because of COVID19</h3>
       </div>
       <div className=" my-3">
       <p className="main-time">APRIL 8, 2020</p>
       </div>
       <div className="my-3">
       <p className="main-description">Lorem ipsum dolor sit amet consectetur <br /> adipisicing  elit. Velit repellendus <br />temporibus  impedit doloremque alias, repellat <br /> commodi  officia neque. Eum, doloribus....</p>
       </div>
       <div className="d-flex cases-home">
       <div className="my-5">
         <p className='cases-main'>553,987,538</p>
         <p className='cases-desp'>Confirmed cases</p>
       </div>
       <div className="vl"></div>

       <div className="my-5">
         <p className='cases-main'>6,360,725</p>
         <p className='cases-desp'>Total deaths</p>
       </div>
       <div className="vl"></div>

       <div className="my-5">
         <p className='cases-main'>525,948,383</p>
         <p className='cases-desp'>Total recovered</p>
       </div>
       <div className="vl"></div>
       
       <div className="my-5">
         <p className='cases-main'>21,678,430</p>
         <p className='cases-desp'>Total active cases</p>
       </div>
       </div>
     </div>
     
    </div>
  </div>

  <div className="container">
    <TopComponent />
    </div>
    <div className="container-fluid">
    <QuickRead />
    </div>
  </>  
  )
}

export default Home