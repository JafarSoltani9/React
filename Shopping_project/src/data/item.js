const productList = [
    {
        id: '1',
        title: 'product1',
        price: 100,
        image: '/images/1.JPG'

    },
    {
        id: '',
        title: 'product2',
        price: 100,
        image: '/images/1.JPG'

    },
    {
        id: '3',
        title: 'product3',
        price: 100,
        image: '/images/1.JPG'

    },
    {
        id: '4',
        title: 'product4',
        price: 100,
        image: '/images/1.JPG'

    },
]


function getProductData (id) {
    let productData = productList.find((item) => item.id === id)
    return productData
}

export { productList, getProductData }