const productList = [
    {
        id: '1',
        title: 'Airpods',
        price: 180,
        image: '/images/airpods.jpg'

    },
    {
        id: '2',
        title: 'Iphone',
        price: 799,
        image: '/images/iphone.jpg'

    },
    {
        id: '3',
        title: 'Ipad',
        price: 850,
        image: '/images/ipad.jpg'

    },
    {
        id: '4',
        title: 'Macbook',
        price: 2499,
        image: '/images/macbook.jpg'

    },
    {
        id: '5',
        title: 'Mouse',
        price: 99,
        image: '/images/mouse.jpg'

    },
    {
        id: '6',
        title: 'Micophone',
        price: 110,
        image: '/images/mic.jpg'

    },
    {
        id: '7',
        title: 'Apple Watch',
        price: 450,
        image: '/images/watch.jpg'

    },
    {
        id: '8',
        title: 'AirPods Max',
        price: 599,
        image: '/images/headphone.jpg'

    },
]


function getProductData(id) {
    let productData = productList.find((product) => product.id === id)

    return productData
}

export { productList, getProductData }