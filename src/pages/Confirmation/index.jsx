import React, { useState, useEffect } from 'react'
import { Container } from '../../styles/global'
import HeaderContainer from '../../components/Header'
import { Api } from '../../service/Api'
import Values from '../../components/Values'
import BuyConfirmation from '../../components/BuyConfirmation'
import { ProductsConfirmation } from '../../components/ProductsConfirmation'
import BuyConfirmationStyled from './style'
import CardInfo from '../../components/CardInfo'

function Confirmation() {
  const [data, setData] = useState(undefined)
  useEffect(() => {
    ;(async () => {
      const response = await Api.get('5b15c4923100004a006f3c07')
      setData(response.data)
    })()
  }, [])

  return (
    <Container className="container-flex">
      {typeof data !== 'undefined' && (
        <>
          <HeaderContainer index={2} />
          <BuyConfirmation />
          <CardInfo />
          <ProductsConfirmation items={data.items} />
          <Values
            values={{
              subTotal: data.subTotal,
              shippingTotal: data.shippingTotal,
              discount: data.discount,
              total: data.total
            }}
          />
        </>
      )}
    </Container>
  )
}

export default Confirmation
