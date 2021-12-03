import styled from 'styled-components'

export const Products = styled.span`
  color: #999;
  font-size: 18px;
  font-weight: 700;
  display: inline-block;
  margin: 10px 0px 5px 15px;
`
export const ContainerProdutos = styled.section`
  height: 347px;
  width: 341px;
  background-color: #fff;
  margin: auto;
  margin-bottom: 20px;
  border-radius: 3px;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
  position: relative;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .ContainerItens {
    height: 90px;
    width: 316px;
    border-radius: 3px;
    border: 2px solid #eee;
    list-style: none;
    display: flex;
  }

  .product-image {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0.4;
  }
  .image-product {
    height: 80%;
    object-fit: cover;
  }

  .product-description {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #212122;
    font-size: 13px;
    line-height: 20px;
    padding: 7px;
  }

  .product-values {
    display: flex;
    text-align: right;
    justify-content: flex-end;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
  }
`
