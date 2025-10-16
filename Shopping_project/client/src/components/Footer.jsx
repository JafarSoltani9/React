import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    padding: '25px 0',
    background: '#2e3742',
    width: '100%',
    position: 'relative',
  };

  return (
    <footer style={footerStyle} className="bg-dark text-white text-center py-3">
      <div className="container">
        <p className="mb-1">
          © Copyright <strong>Jafar Soltani</strong>. All Rights Reserved
        </p>
        <p className="mb-0">Designed by Jafar Soltani</p>
      </div>
    </footer>
  );
}

export default Footer;
