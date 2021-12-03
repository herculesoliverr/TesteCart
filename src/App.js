import { BrowserRouter } from 'react-router-dom'
import './App.css'
import GlobalStyle from './styles/global'
import Routing from './routes/index'
import { MainContainer } from './styles/global'

function App() {
  return (
    <MainContainer>
      <GlobalStyle />
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </MainContainer>
  )
}

export default App
