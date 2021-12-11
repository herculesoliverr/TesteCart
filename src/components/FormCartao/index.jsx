import React, {
  useState,
  useCallback,
  createContext,
  useContext,
  useEffect
} from 'react'
import { ContainerProdutos } from '../../components/Produtos/style'
import { Form, Formgroup } from './style'
import { Button } from '../../styles/global'
import { FormContext } from '../../contexts/FormContext'

function FormCartao() {
  const { card, updateCard } = useContext(FormContext)

  useEffect(() => {}, [card])

  return (
    <>
      <ContainerProdutos>
        <Form>
          <Formgroup>
            <span className="label-form"> Número do cartão:</span>
            <input
              type="text"
              value={card.number}
              onChange={e => updateCard('number', e.target.value)}
              className="form-box-large"
              placeholder="____.____.____.____"
            />
          </Formgroup>
          <Formgroup>
            <span className="label-form"> Nome do Titular:</span>
            <input
              type="text"
              value={card.name}
              onChange={e => updateCard('name', e.target.value)}
              className="form-box-large"
              placeholder="Como no cartão"
            />
          </Formgroup>
          <div className="d-flex">
            <Formgroup>
              <span className="label-form">Validade (mês/ano):</span>
              <input
                type="text"
                value={card.cardValidate}
                onChange={e => updateCard('cardValidate', e.target.value)}
                className="form-box-small"
                placeholder="__/____"
              />
            </Formgroup>
            <Formgroup className="ml">
              <span className="label-form">CVV:</span>
              <input
                type="text"
                value={card.cvv}
                onChange={e => updateCard('cvv', e.target.value)}
                className="form-box-small"
                placeholder="___"
              />
            </Formgroup>
          </div>
          {/* <Button onClick={addCard} type="button"></Button> */}
        </Form>
      </ContainerProdutos>
    </>
  )
}

export default FormCartao
