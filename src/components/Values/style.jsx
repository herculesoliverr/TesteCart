import styled from 'styled-components'

export const ContainerValues = styled.span`
  box-sizing: border-box;
  padding: 14px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 129px;
  width: 341px;
  border-radius: 3px;
  font-size: 14px;
  border: 1px solid #ccc;

  .div-valores {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .span-valor-desconto {
    color: #ff7800;
  }

  .span-valor-total {
    color: #212122;
    font-weight: 700;
  }
`
