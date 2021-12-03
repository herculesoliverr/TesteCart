import React from 'react'
import { useRoutes } from 'react-router-dom'
import Bag from '../pages/Bag'
import Payment from '../pages/Payment/'

const Routes = () =>
  useRoutes([
    { path: '/bag', element: <Bag /> },
    { path: '/payment', element: <Payment /> }
  ])

function Routing() {
  return <Routes />
}

export default Routing
