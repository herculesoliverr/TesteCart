import React from 'react'
import { HeaderContainer } from './style'

function Header({ index }) {
  return (
    <>
      <HeaderContainer>
        <span className={`${index === 0 ? 'span-telas-active' : 'span-telas'}`}>
          SACOLA
        </span>
        <span className={`${index === 1 ? 'span-telas-active' : 'span-telas'}`}>
          PAGAMENTO
        </span>
        <span className={`${index === 2 ? 'span-telas-active' : 'span-telas'}`}>
          CONFIRMAÇÃO
        </span>
      </HeaderContainer>
    </>
  )
}

export default Header
