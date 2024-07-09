import Navbar from "./components/Navbar"
import { Container } from "react-bootstrap"
import { Routes, Route} from 'react-router-dom'
import Shop from "./router/Shop"
import { CardProvider } from "./context/CartContext"

function App () {
  return (
    <CardProvider>
      <Container>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element = {<Shop/>} />
        </Routes>
      </Container>
    </CardProvider>
  )

}

export default App