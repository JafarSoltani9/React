import { Container, Col, Row } from "react-bootstrap";
import './Footer.css';
import footerImg from '../../assets/images/footer.jpg';

function Footer() {
    return (
        <footer>
            <Container>
                <Row className="align-items-center">
                    <Col>
                        <h2>Copyright</h2>
                    </Col>
                    <Col style={{ textAlign: 'right' }}>
                        <img className="footerImg" src={footerImg} alt="Footer" />
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
