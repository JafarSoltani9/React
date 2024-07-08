import Navbar from "./components/Navbar"
import { Container } from "react-bootstrap"
import { Routes, Route} from 'react-router-dom'
import Shop from "./router/Shop"


function App () {
  return (
    <Container>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element = {<Shop/>} />
      </Routes>
    </Container>
  )

}

export default App