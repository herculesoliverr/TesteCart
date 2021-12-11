import React from 'react'
import { useRoutes } from 'react-router-dom'
import Bag from '../pages/Bag'
import Payment from '../pages/Payment/'
import Confirmation from '../pages/Confirmation'
import { FormProvider } from '../contexts/FormContext'

const Routes = () =>
  useRoutes([
    { path: '/', element: <Bag /> },
    {
      path: '/payment',
      element: <Payment />
    },
    { path: '/confirmation', element: <Confirmation /> }
  ])

function Routing() {
  return (
    <FormProvider>
      <Routes />
    </FormProvider>
  )
}

export default Routing
