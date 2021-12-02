import { BrowserRouter } from 'react-router-dom'
import './App.css'
import GlobalStyle from './styles/global'
import Routing from './routes/index'

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </>
  )
}

export default App
