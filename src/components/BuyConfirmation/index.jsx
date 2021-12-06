import React from 'react'
import ConfirmationImage from '../../assets/images/success.png'
import { ConfirmationBuyImage } from './style'

function BuyConfirmation() {
  return (
    <>
      <ConfirmationBuyImage>
        <img src={ConfirmationImage} alt="Imagem de confirmação de compra" />
      </ConfirmationBuyImage>
    </>
  )
}

export default BuyConfirmation
