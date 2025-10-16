import {Container, Row, Col} from "react-bootstrap"
import ArticleItem from "../../components/article/ArticleItem"
import MyNavbar from "../../components/navbar/Navbar"
import { useEffect } from "react"
import axios from 'axios';


function Home() {
    useEffect(() =>{
        axios.get()
    },[])
    return (
        <>
            <MyNavbar/>
            <Container>
                <h1 style={{marginTop: '23px'}}>Article List</h1>
                <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 gy-4 py-3">
                    <Col>
                        <ArticleItem/>
                    </Col>
                    <Col>
                        <ArticleItem/>
                    </Col>
                    <Col>
                        <ArticleItem/>
                    </Col>
                    <Col>
                        <ArticleItem/>
                    </Col>
                    <Col>
                        <ArticleItem/>
                    </Col><Col>
                        <ArticleItem/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home