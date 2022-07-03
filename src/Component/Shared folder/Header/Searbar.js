import React from 'react'
import './Header.css'


function Searbar({state, setSearch}) {
   
  return (<>
  
<div class="d-flex justify-content-end searchbar-icon">
    <div className="input">
  <input type="text" class="form-control inputfiled" aria-label="Dollar amount (with dot and two decimal places)" /></div>
  <div className="search-btn "> <span class="input-group-text">Search</span></div>
</div>
  </>
  )
}

export default Searbar