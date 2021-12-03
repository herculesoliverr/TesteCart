import React from 'react'
import { ContainerValues } from './style'

function Values({ values }) {
  return (
    <div>
      <ContainerValues>
        <div className="div-valores">
          <span>PRODUTOS</span>
          <span>R$ {values.subTotal.toFixed(2)}</span>
        </div>
        <div className="div-valores">
          <span>FRETE</span>
          <span>R$ {values.shippingTotal.toFixed(2)}</span>
        </div>
        <div className="div-valores">
          <span className="span-valor-desconto">DESCONTO</span>
          <span className="span-valor-desconto">
            R$ {values.discount.toFixed(2)}
          </span>
        </div>
        <div className="div-valores">
          <span className="span-valor-total">TOTAL</span>
          <span className="span-valor-total">R$ {values.total.toFixed(2)}</span>
        </div>
      </ContainerValues>
    </div>
  )
}

export default Values
