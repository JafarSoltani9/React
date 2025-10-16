import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Navbar.css'
import { useState } from 'react';
import { isLogin } from '../../Utils'

function MyNavbar() {
    const [loginStatus , setLoginStatus] = useState(isLogin() ? 'Exit' : 'Login'  )
    const loginHandler = () =>{
        document.cookie = "username=admin; expires=Thu, 18 Dec 2015 12:00:00 UTC";
        setLoginStatus('Login')
    }
    return (
        <Navbar style={{backgroundColor:'rgb(186,182,253)'}} expand="lg" >
            <Container>
                <Navbar.Brand style={{fontSize:'25px', fontWeight: 'bold'}} href="#home">My Login Panel</Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end" // You can use "start" for left-side or "end" for right-side
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <NavLink to='/' className='nav-link'>Home</NavLink>
                            <NavLink to ='/about' className='nav-link'>About Me</NavLink>
                            <NavLink to='/article' className='nav-link'>Article</NavLink>
                            <NavLink to='/panel' className='nav-link'>Panel</NavLink>
                            {isLogin() ? 
                            <NavLink to='/login' onClick={loginHandler} className='nav-link'>{loginStatus}</NavLink>
                            : <NavLink to='/login' className='nav-link'>{loginStatus}</NavLink>}
                            
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;
