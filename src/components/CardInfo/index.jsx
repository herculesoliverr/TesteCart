import React from 'react'
import { Container } from './style'
import { Pagamento } from './style'

function CardInfo() {
  return (
    <>
      <Pagamento>PAGAMENTO</Pagamento>
      <Container className="div-container">
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </Container>
    </>
  )
}

export default CardInfo
