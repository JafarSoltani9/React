import { Card, Button, Form, Row, Col } from 'react-bootstrap'
import {CartContext} from '../context/CartContext'
import { useContext } from 'react'


function ProductItem({ product }) {
    const cart = useContext(CartContext)

    const productQuantity = cart.getProductQuantity(product.id)

    return (
        <Card className='mt=5 card-bg'>
            <Card.Body>
                    <Card.Img variant='top' src={product.image} height='200px' style={{objectFit: 'cover'}}/>
                    <Card.Title align='left' className='text-light pt-4'>{product.title}</Card.Title>
                    <Card.Text align='left' className='text-light'>{product.price} $</Card.Text>
                    {
                        productQuantity > 0 ?(
                            <>
                                <Form as={Row}>
                                    <Form.Label column='true' sm = '6' className='text-white'>
                                        Total {productQuantity}
                                    </Form.Label>
                                    <Col sm='6'>
                                        <Button onClick={() => {cart.addProduct(product.id)}} sm='6' className='mx-2 text-white' variant='btn btn-outline-secondary'>+</Button>
                                        <Button onClick={() => {cart.removeProduct(product.id)}} sm='6' className='mx-2 text-white' variant='btn btn-outline-secondary'>-</Button>
                                    </Col>
                                </Form>
                                <Button onClick={() => {cart.deleteCard(product.id)}} className='my-4' variant='btn btn-light'>Remove</Button>
                            </>
                        ) : (
                            <Button onClick= {() => cart.addProduct(product.id)} variant='btn btn-outline-secondary'>Buy</Button>
                        )
                    }
                
            </Card.Body>
        </Card>
    )
}

export default ProductItem