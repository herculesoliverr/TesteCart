import React from 'react'
import { useRoutes } from 'react-router-dom'
import Bag from '../pages/Bag'
import Payment from '../pages/Payment/'
import Confirmation from '../pages/Confirmation'

const Routes = () =>
  useRoutes([
    { path: '/', element: <Bag /> },
    { path: '/payment', element: <Payment /> },
    { path: '/confirmation', element: <Confirmation /> }
  ])

function Routing() {
  return <Routes />
}

export default Routing
