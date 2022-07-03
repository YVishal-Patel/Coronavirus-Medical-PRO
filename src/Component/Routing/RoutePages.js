import React from 'react'
import Home from '../Pages/Home/Home'
import Coronavirus from '../Pages/Coronavirus/Coronavirus'
import Global from '../Pages/Global/Global'
import Impact from '../Pages/Impact/Impact'
import Research from '../Pages/Research/Research'
import Treatment from '../Pages/Treatment/Treatment'
import Vaccine from '../Pages/Vaccine/Vaccine'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function RoutePages() {
  return (
    <>
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/coronavirus' element={<Coronavirus />} />
      <Route path='/global' element={<Global />} />
      <Route path='/impact' element={<Impact />} />
      <Route path='/research' element={<Research />} />
      <Route path='/treatment' element={<Treatment />} />
      <Route path='/vaccine' element={<Vaccine />} />
    </Routes>
    {/* </BrowserRouter> */}
    </>
  )
}

export default RoutePages