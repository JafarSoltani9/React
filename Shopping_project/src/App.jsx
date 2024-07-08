import Navbar from "./components/Navbar"
import { Container } from "react-bootstrap"
import { Routes, Route} from 'react-router-dom'
import Shop from "./router/Shop"
import { CartContext } from "./context/CartContext"

function App () {
  return (
    <CartContext>
      <Container>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element = {<Shop/>} />
        </Routes>
      </Container>
    </CartContext>
  )

}

export default App