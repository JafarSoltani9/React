import { Row, Col } from 'react-bootstrap' 
import ProductItem from '../components/ProductItem'
import { productList } from '../data/item'

function Shop () {
    return (
        <Row xs={1} md={4} className='g-4'>
            {productList.map((item) => (
                <Col align='center' key={item.id} >
                    <ProductItem product={item} />
                </Col>
                ))}
        </Row>
    )
}

export default Shop