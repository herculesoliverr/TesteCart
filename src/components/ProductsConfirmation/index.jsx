import React from 'react'
import { ContainerProdutos } from './style'
import { Products } from './style'

function ProductsConfirmation({ items }) {
  return (
    <div>
      <Products>PRODUTOS</Products>
      <ContainerProdutos>
        {items.map((produto, index) => {
          return (
            <div key={index} className="ContainerItens">
              <div className="product-image">
                <img
                  className="image-product"
                  src={produto.product.imageObjects[0].thumbnail}
                  alt="Imagem do produto"
                />
              </div>
              <div className="product-description">
                <span>{produto.product.name}</span>
              </div>
            </div>
          )
        })}
      </ContainerProdutos>
    </div>
  )
}

export { ProductsConfirmation }
