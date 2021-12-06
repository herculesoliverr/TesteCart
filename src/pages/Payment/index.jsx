import React, { useState, useEffect } from 'react'
import { Button, Container } from '../../styles/global'
import HeaderContainer from '../../components/Header'
import { Pagamentos } from './style'
import FormCartao from '../../components/FormCartao'
import { Api } from '../../service/Api'
import Values from '../../components/Values'
import { useNavigate } from 'react-router-dom'

function Payment() {
  const [data, setData] = useState(undefined)
  useEffect(() => {
    ;(async () => {
      const response = await Api.get('5b15c4923100004a006f3c07')
      setData(response.data)
    })()
  }, [])

  const navigate = useNavigate()
  const redirect = () => {
    navigate('/confirmation')
  }

  return (
    <Container>
      {typeof data !== 'undefined' && (
        <>
          <HeaderContainer index={1} />
          <Pagamentos>CARTÃO DE CRÉDITO</Pagamentos>
          <FormCartao />
          <Values
            values={{
              subTotal: data.subTotal,
              shippingTotal: data.shippingTotal,
              discount: data.discount,
              total: data.total
            }}
          />
          <Button type="button" onClick={redirect}>
            <span className="button-text">FINALIZAR O PEDIDO</span>
          </Button>
        </>
      )}
    </Container>
  )
}

export default Payment
