import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Bag from '../pages/Bag'

function Routing() {
  return (
    <Routes>
      <Route path="/bag" exect component={Bag} />
    </Routes>
  )
}

export default Routing
