import React, { useState, useEffect } from 'react'
import { Button, Container } from '../../styles/global'
import './style'
import HeaderContainer from '../../components/Header'
import Produtos from '../../components/Produtos'
import Values from '../../components/Values'
import { Api } from '../../service/Api'

function Bag() {
  const [data, setData] = useState(undefined)
  useEffect(() => {
    ;(async () => {
      const response = await Api.get('5b15c4923100004a006f3c07')
      setData(response.data)
    })()
  }, [])

  return (
    <Container>
      {typeof data !== 'undefined' && (
        <>
          <HeaderContainer />
          <Produtos items={data.items} />
          <Values
            values={{
              subTotal: data.subTotal,
              shippingTotal: data.shippingTotal,
              discount: data.discount,
              total: data.total
            }}
          />
          <Button>
            <span className="button-text">SEGUIR PARA O PAGAMENTO</span>
          </Button>
        </>
      )}
    </Container>
  )
}

export default Bag
