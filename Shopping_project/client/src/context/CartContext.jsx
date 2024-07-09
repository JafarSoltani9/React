import { createContext, useState  } from "react"
import { getProductData } from "../data/item"

export const CartContext = createContext({
    items: [],
    getProductQuantity: () =>{},
    addProduct: () => {},
    removeProduct: () => {},
    deleteCard: () => {},
    getTotalAmount: () => {}
})

export function CardProvider ({ children }) {
    const [cartProduct, setCartProduct] = useState([])

    function getProductQuantity (id) {
        const quantity = cartProduct.find(product => product.id === id)?.quantity

        if ( quantity === undefined) {
            return 0
        }
        return quantity
    }   

    // add product in the bag
    function addProduct(id) {
        const quantity = getProductQuantity(id)
        
        if (quantity === 0 ) {
            setCartProduct([...cartProduct, {id, quantity: 1}])
        } else {
            setCartProduct(cartProduct.map((item) => item.id === id ? {
                ...item, quantity: item.quantity + 1}: item ))
        }
    }

    // delete from car 
    function deleteCard (id) {
        setCartProduct((cartProduct) => 
            cartProduct.filter((item) => {
                return item.id !== id
            }))
    }

    // remove item from cart, just remove one item like --1
    function removeProduct  (id) {
        const quantity = getProductQuantity(id)

        if ( quantity === 1) {
            deleteCard(id)
        } else {
            setCartProduct(cartProduct.map((item) => item.id === id ? {
                ...item, quantity: item.quantity - 1}: item ))
            }

        }
    // get me total price
    function getTotalAmount () {
        let totalPrice = 0

        cartProduct.map((item) => {
            const productData = getProductData(item.id)

            totalPrice += productData.price * item.quantity
        })
        return totalPrice
    }


    const ContextValue = {
        items: cartProduct,
        getProductQuantity,
        addProduct,
        removeProduct,
        deleteCard,
        getTotalAmount
    }

    return (
        <CartContext.Provider value={ContextValue}>{children}</CartContext.Provider>
    )
}