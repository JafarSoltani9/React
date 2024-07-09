import React from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import { Routes, Route } from 'react-router-dom';
import Shop from "./pages/Shop";
import { CardProvider } from "./context/CartContext";

function App() {
  return (
    
    <CardProvider>
      <Container>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
        </Routes>
        
      </Container>
      <Footer />
    </CardProvider>
    
  );
}

export default App;
