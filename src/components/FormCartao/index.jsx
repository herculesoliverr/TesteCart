import React, { useState } from 'react'
import { ContainerProdutos } from '../../components/Produtos/style'
import { Form, Formgroup } from './style'

function FormCartao() {
  return (
    <>
      <ContainerProdutos>
        <Form className="">
          <Formgroup>
            <span className="label-form"> Número do cartão:</span>
            <input
              type="text"
              className="form-box-large"
              placeholder="____.____.____.____"
            />
          </Formgroup>
          <Formgroup>
            <span className="label-form"> Nome do Titular:</span>
            <input
              type="text"
              className="form-box-large"
              placeholder="Como no cartão"
            />
          </Formgroup>
          <div className="d-flex">
            <Formgroup>
              <span className="label-form">Validade (mês/ano):</span>
              <input
                type="text"
                className="form-box-small"
                placeholder="__/____"
              />
            </Formgroup>
            <Formgroup className="ml">
              <span className="label-form">CVV:</span>
              <input type="text" className="form-box-small" placeholder="___" />
            </Formgroup>
          </div>
        </Form>
      </ContainerProdutos>
    </>
  )
}

export default FormCartao
