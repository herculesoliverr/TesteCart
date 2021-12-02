import { createGlobalStyle } from 'styled-components'

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

#root {
  margin: 160px auto 0;
  position: relative;
  min-height: calc(100vh - 170px);
}

button {
  cursor: pointer;
}

h6, h5, h4, h3, h2, h1 {
  margin: 0;
}
`
