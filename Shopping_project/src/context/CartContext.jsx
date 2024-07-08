import { createContext, useState  } from "react"

export const cartContext = createContext({
    items: [],
    getProductQuantity: () =>{},
    addProduct: () => {},
    removeProduct: () => {},
    deleteCard: () => {},
    getTotalAmount: () => {}
})

export function cardProvider ({ children }) {
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
        setCartProduct(cartProduct.filter(item => item.id !== id))
    }


    const contextValue = {
        items: cartProduct,
        getProductQuantity,
        addProduct,
        removeProduct,
        deleteCard,
        getTotalAmount,
    }

    return (
        <cartContext.Provider value={contextValue}>{children}</cartContext.Provider>
    )
}