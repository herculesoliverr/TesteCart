import React from 'react'
import { HeaderContainer } from './style'

function Header() {
  return (
    <>
      <HeaderContainer>
        <span className="span-telas-active">SACOLA</span>
        <span className="span-telas">PAGAMENTO</span>
        <span className="span-telas">CONFIRMAÇÃO</span>
      </HeaderContainer>
    </>
  )
}

export default Header
