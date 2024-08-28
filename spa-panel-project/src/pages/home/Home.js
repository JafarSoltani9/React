import { Col, Container, Row } from 'react-bootstrap';
import MyNavbar from '../../components/navbar/Navbar';
import programmingImg from '../../assets/images/programming.svg';
import CourseItem from '../../components/course/CourseItem';
import { useState } from 'react';
import Footer from '../../components/footer/Footer';
import { courseData } from '../../data';

function Home() {

    const [courses, setCourses] = useState(courseData);

    return (
        <div>
            <MyNavbar />
            <Container fluid='md'>
                <Row className='my-5 align-items-center'>
                    <Col lg={6} className='order-lg-2'>
                        <h1>Introduction to Programming</h1> 
                        <p style={{textAlign:'justify'}}>
                            Programming, or coding, involves creating instructions for computers to perform tasks. It's essential for developing software, websites, and applications, playing a key role in today’s technology-driven world.

                            Programming enables problem-solving, task automation, and innovation. It underpins everything from mobile apps and websites to data analysis and game development. Understanding syntax (the structure of code) and semantics (its meaning) is fundamental. Variables store data, while control structures like loops and conditionals manage how code executes. Functions and procedures help organize and reuse code efficiently.

                            In practical terms, programming powers web development with HTML and JavaScript, mobile apps with Swift and Kotlin, and data analysis with Python. It’s a vital skill that drives technological progress and efficiency.
                        </p>
                    </Col>
                    <Col lg={6} className='py-4 order-lg-2'>
                        <img src={programmingImg} className='img-fluid' alt='Programming Illustration' />
                    </Col>
                </Row>

                <Row className='my-5'>
                    <h2 className='py-4'>Development Courses</h2>
                    {courses.map(course => (
                        <Col key={course.id} className='py-3' md={6} lg={4} xl={3}>
                        <CourseItem {...course} />
                        </Col>
                    ))}
                </Row>

            </Container>

            <Footer/>
        </div>
    );
}

export default Home;
