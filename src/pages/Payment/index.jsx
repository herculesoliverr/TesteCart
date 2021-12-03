import React, { useState, useEffect } from 'react'
import { Button, Container } from '../../styles/global'
import HeaderContainer from '../../components/Header'
import { Pagamentos } from './style'
import FormCartao from '../../components/FormCartao'

function Payment() {
  return (
    <Container>
      <HeaderContainer index={1} />
      <Pagamentos>Pagamentos</Pagamentos>
      <FormCartao />
      <Button>
        <span className="button-text">FINALIZAR O PEDIDO</span>
      </Button>
    </Container>
  )
}

export default Payment
