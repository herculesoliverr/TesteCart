import React, { useState, useEffect, useContext } from 'react'
import { Button, Container } from '../../styles/global'
import HeaderContainer from '../../components/Header'
import { Pagamentos } from './style'
import FormCartao from '../../components/FormCartao'
import { Api } from '../../service/Api'
import Values from '../../components/Values'
import { useNavigate } from 'react-router-dom'
import { FormProvider, FormContext } from '../../contexts/FormContext'

function Payment() {
  const { card } = useContext(FormContext)
  const [data, setData] = useState(undefined)
  useEffect(() => {
    ;(async () => {
      const response = await Api.get('5b15c4923100004a006f3c07')
      setData(response.data)
    })()
  }, [])

  const navigate = useNavigate()
  const submitForm = () => {
    navigate('/confirmation')
    console.log(card)
  }

  return (
    <Container>
      {data && (
        <>
          <HeaderContainer index={1} />
          <div className="div-payment">
            <Pagamentos>CARTÃO DE CRÉDITO</Pagamentos>
            <FormCartao aoEnviar={aoEnviarForm} />
          </div>
          <Values
            values={{
              subTotal: data.subTotal,
              shippingTotal: data.shippingTotal,
              discount: data.discount,
              total: data.total
            }}
          />
          <Button type="button" onClick={submitForm}>
            <span className="button-text">FINALIZAR O PEDIDO</span>
          </Button>
        </>
      )}
    </Container>
  )
}

function aoEnviarForm(dados) {
  console.log(dados)
}

export default Payment
