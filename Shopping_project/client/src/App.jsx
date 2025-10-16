import React from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import { Routes, Route } from 'react-router-dom';
import Shop from "./pages/Shop";
import Success from "./pages/Success";
import { CardProvider } from "./context/CartContext";

function App() {
  return (
    
    <CardProvider>
      <Container>
        <Navbar />
        <Routes>
          <Route index element={<Shop />} />
          <Route path='/success' element={<Success />} />
        </Routes>
        
      </Container>
      <Footer />
    </CardProvider>
    
  );
}

export default App;
