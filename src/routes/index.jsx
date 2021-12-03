import React from 'react'
import { useRoutes } from 'react-router-dom'
import Bag from '../pages/Bag'

const Routes = () => useRoutes([{ path: '/bag', element: <Bag /> }])

function Routing() {
  return <Routes />
}

export default Routing
