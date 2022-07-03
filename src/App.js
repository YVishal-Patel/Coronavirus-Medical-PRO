import React from 'react'
import Header from './Component/Shared folder/Header/Header'
import RoutePages from './Component/Routing/RoutePages'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
  <>
    <BrowserRouter>
    <Header />
    <RoutePages />
    </BrowserRouter>
    </>
  )
}

export default App