import { useParams } from 'react-router-dom';
import MyNavbar from '../../components/navbar/Navbar';
import { courseData } from '../../data';
import { Container, Row, Col } from 'react-bootstrap';

function Course() {

    const { courseId } = useParams();
    const courseInfo = courseData.find(course => course.id == courseId);
    console.log(courseInfo);

    return (
        <div>
            <MyNavbar />
            <Container className="mt-5 my-5">
                <Row className="align-items-center">
                    <Col md={4} className="text-center">
                        <img 
                            src={courseInfo.img} 
                            alt={courseInfo.title} 
                            style={{ width: '100%', height: 'auto', maxWidth: '400px', borderRadius: '5px' }}
                        />
                    </Col>
                    <Col md={8}>
                        <h1 className="mb-3">{courseInfo.title}</h1>
                        <p>Teacher: {courseInfo.teacher}</p>
                        <h3 className="mb-3">{courseInfo.text}</h3>
                        <p>{courseInfo.description}</p>
                        
                    </Col>

                </Row>
            </Container>
        </div>
    );
}

export default Course;
