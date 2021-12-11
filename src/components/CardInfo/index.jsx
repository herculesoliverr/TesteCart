import React, { useContext } from 'react'
import { Container } from './style'
import { Pagamento } from './style'
import { FormContext } from '../../contexts/FormContext'

const CardInfo = () => {
  const { card } = useContext(FormContext)
  return (
    <>
      <div>
        <Pagamento>PAGAMENTO</Pagamento>
        <Container className="div-container">
          <span>
            ****.****.****.
            {card.number.substring(card.number.length - 4, card.number.length)}
          </span>
          <span>{card.name}</span>
          <span>{card.cardValidate}</span>
        </Container>
      </div>
    </>
  )
}

export default CardInfo
