import { useState, useContext } from 'react'
import {Navbar as NavbarBs, Button, Modal} from 'react-bootstrap'
import { BsCart } from 'react-icons/bs'
import { CartContext } from '../context/CartContext'
import CartProduct from './CartProduct'
function Navbar () {
    const [showModal, setShowModal] = useState(false)
    const cart = useContext(CartContext)

    const productCount = cart.items.reduce((sum, product) => sum + product.quantity ,0 )

    const handleShow = () =>{
        setShowModal(true)
    }
    const handleClose = () =>{setShowModal(false)}

    async function checkout() {
        console.log("m,nashdmjka");
        const response = await fetch('http://localhost:3000/api', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ items: cart.items }),
        })
        console.log("m,nashdmjka");
    
        const data = await response.json()
    
        if (data.url) {
          window.location.assign(data.url)
        }
        
    }

    return (
        <>
            <NavbarBs className='border-bottom border-secondary'>
                <NavbarBs.Collapse className='justify-content-end'>
                    <Button onClick={handleShow} variant='btn btn.outline-secondary' className='text-white'>
                        ({productCount})<BsCart className='mx-2'></BsCart>Bag</Button>
                </NavbarBs.Collapse>
            </NavbarBs>
            <Modal show={showModal} onHide={handleClose} contentClassName='card-bg' dir='rtl'>
                <Modal.Header >
                    
                    <Modal.Body>
                        {productCount > 0 ? (
                            <>
                                <h3 className='mb-4'>Products</h3>
                                {cart.items.map((item) =>(
                                    <CartProduct key={item.id} id={item.id} quantity={item.quantity}></CartProduct>
                                ))}
                                <h3>Total Price: {cart.getTotalAmount()}</h3>
                            </>
                        ) : (
                            <h3 className='text-center'>Your bag is empty</h3>
                        )}
                        <Button className='mt-4' variant='btn btn-light' onClick={checkout}>Order</Button>
                        <Button onClick={handleClose} variant='btn btn-outline-secondary' className='mt-4 mx-3 text-white' >Close</Button>
                    </Modal.Body>
                </Modal.Header>
            </Modal>
        </>
    )

}

export default Navbar