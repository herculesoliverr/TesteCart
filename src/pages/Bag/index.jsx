import React, { useState, useEffect } from 'react'
import { Button, Container } from '../../styles/global'
import './style'
import HeaderContainer from '../../components/Header'
import { Produtos } from '../../components/Produtos'
import Values from '../../components/Values'
import { Api } from '../../service/Api'
import { useNavigate } from 'react-router-dom'

function Bag() {
  const [data, setData] = useState(undefined)
  useEffect(() => {
    ;(async () => {
      const response = await Api.get('5b15c4923100004a006f3c07')
      setData(response.data)
    })()
  }, [])

  const navigate = useNavigate()
  const redirect = () => {
    navigate('/payment')
  }

  return (
    <Container>
      {typeof data !== 'undefined' && (
        <>
          <HeaderContainer index={0} />
          <Produtos items={data.items} />
          <Values
            values={{
              subTotal: data.subTotal,
              shippingTotal: data.shippingTotal,
              discount: data.discount,
              total: data.total
            }}
          />
          <Button type="button" onClick={redirect}>
            <span className="button-text">SEGUIR PARA O PAGAMENTO</span>
          </Button>
        </>
      )}
    </Container>
  )
}

export default Bag
