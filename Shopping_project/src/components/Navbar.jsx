import { useState } from 'react'
import {Navbar as NavbarBs, Button, Modal} from 'react-bootstrap'
import { BsCart } from 'react-icons/bs'


function Navbar () {
    const [showModal, setShowModal] = useState(false)

    const handleShow = () =>{
        setShowModal(true)
    }
    const handleClose = () =>{setShowModal(true)}

    return (
        <>
            <NavbarBs className='border-bottom border-secondary'>
                <NavbarBs.Collapse className='justify-content-end'>
                    <Button onClick={handleShow} variant='btn btn.outline-secondary' className='text-white'>
                        <BsCart className='mx-2'></BsCart>Bag</Button>
                </NavbarBs.Collapse>
            </NavbarBs>
            <Modal show={showModal} onHide={handleClose} contentClassName='card-bg' dir='rtl'>
                <Modal.Header closeButton closeVariant='white'>
                    
                    <Modal.Body>Products</Modal.Body>
                </Modal.Header>
            </Modal>
        </>
    )

}

export default Navbar