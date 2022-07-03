import React, {useState} from 'react'
import logo from '/home/vishal/Desktop/weekend-app/src/Assets/img/logo.jpg'
import './Header.css'
import  Searchbar from './Searbar'
import {Link} from 'react-router-dom'

function Header() {
  const [state, setState] = useState(false)

  const setSearch  = ()=>{
      setState(!state)
      console.log("Button is clicked")
  }
  return (<>
  <div className="container-fluid main-header">
    <div className="container">
      <div className="d-flex justify-content-between">
   <div className="d-flex left-div">
     <div className="logo">
       <img src={logo} alt="not found" className='logo-img' />
     </div>
     <div className="logo-data">
       <p className='logo-heading'>Coronavirus</p>
       <p className='logo-datas'>Medicine <span className='logo-span-data'>PRO</span></p>
     </div>
   </div>
   <div className="d-flex center-div">
     <div className=" nav-data">
     <ul className='d-flex '>
       <li><Link className='nav-datas' to="/">Home</Link></li>
       <li><Link className='nav-datas' to="/coronavirus">Coronavirus </Link></li>
       <li><Link className='nav-datas' to="/vaccine">Vaccine </Link></li>
       <li><Link className='nav-datas' to="/treatment">Treatment</Link></li>
       <li><Link className='nav-datas' to="/research">Research</Link></li>
       <li><Link className='nav-datas' to="/impact">Impact</Link></li>
       <li><Link className='nav-datas' to="/global">Global</Link></li>
     </ul>
     </div>
     
   </div>
   <div className="last-div">
     <p onClick={setSearch} className='search-icon'>Search <span><i class="fa-solid fa-magnifying-glass"></i></span></p>
   </div>
   </div>
    </div>
  </div>
  {/* <Searchbar state ={state} setSearch={setSearch} /> */}
    </>
  )
}

export default Header