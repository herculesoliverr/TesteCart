import styled, { createGlobalStyle } from 'styled-components'

export const Button = styled.button`
  display: flex;
  background-color: var(--orange);
  height: 60px;
  width: 341px;
  justify-content: center;
  align-items: center;
  margin: auto;
  border-radius: 3px;
  background-color: #ff6c00;
  box-shadow: inset 0 -3px 0 0 #d45a00, 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  border: none;

  &:hover {
    background-color: #d45a00 !important;
  }

  .button-text {
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0.5px;
    line-height: 24px;
    text-align: center;
  }
`

export const Container = styled.div`
  height: 720px;
  width: 360px;
  background-color: #eee;
  box-shadow: 0px 5px 6px 2px #00000020;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default createGlobalStyle`
:root {
  --blue: #0071BC;
  --black: #3B3A34;
  --green: #8CC63F;
  --red: #C53030;
  --white: #FFFFFF;
  --light-grey: #EBEBEB;
  --yellow: #FFFF00;
  --orange: #FF6C00;
}
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  background: var(--light-grey);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

body, input, button {
  font: 16px 'Barlow', 'Roboto', sans-serif;
}

button {
  cursor: pointer;
}
`
