import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 42px;
  width: 100%;
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 29, 0.15);
  display: flex;
  justify-content: space-between;
  padding: 15px;
  align-items: center;

  .span-telas {
    color: #ccc;
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
  }
  .span-telas-active {
    color: #ff7800;
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
  }
`
