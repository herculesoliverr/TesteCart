import React from 'react'
import { ContainerProdutos } from './style'
import { Products } from './style'

function Produtos({ items }) {
  return (
    <div>
      <Products>Produtos</Products>
      <ContainerProdutos>
        {items.map((produto, index) => {
          return (
            <div key={index} className="ContainerItens">
              <div className="product-image">
                <img
                  className="image-product"
                  src={produto.product.imageObjects[0].small}
                  alt="Imagem do produto"
                />
              </div>
              <div className="product-description">
                <span>{produto.product.name.split('-')[0]}</span>
                <span className="product-values">
                  R$ {produto.product.priceSpecification.price.toFixed(2)}
                </span>
              </div>
            </div>
          )
        })}
      </ContainerProdutos>
    </div>
  )
}

export default Produtos
