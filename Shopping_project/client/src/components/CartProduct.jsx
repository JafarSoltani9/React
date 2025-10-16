import { Button } from "react-bootstrap"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

import { getProductData } from "../data/item"

function CartProduct ( { id, quantity } ){
    const cart = useContext(CartContext)
    const productData = getProductData(id)
    return (
        <>
            <p>{productData.title}</p>
            <p>Total: {quantity}</p>
            <p>Price: {quantity * productData.price}</p>
            <Button size="sm" className="mb-5 text-white" variant="btn btn-outline-secondary" onClick={() => cart.removeProduct(id)}>Remove</Button>
        </>
    )
}

export default CartProduct