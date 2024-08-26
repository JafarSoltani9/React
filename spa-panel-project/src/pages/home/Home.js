import { Col, Container, Row } from 'react-bootstrap';
import MyNavbar from '../../components/navbar/Navbar';
import programmingImg from '../../assets/images/programming.svg';
import CourseItem from '../../components/course/CourseItem';
import { useState } from 'react';
import reactImg from '../../assets/images/react.png'
import bootstrapImg from '../../assets/images/bootstrap.jpeg'
import htmlCssImg from '../../assets/images/html-css.jpg'
import javascript from '../../assets/images/java-script.jpg'
import Footer from '../../components/footer/Footer';

function Home() {

    const [courses, setCourses] = useState([
        {
            id: 1,
            title: 'React.js',
            text : 'An introductory guide to help you understand the core concepts that underpin the React.js JavaScript framework.',
            img : reactImg
        },
        {
            id: 2,
            title: 'Bootstrap',
            text : 'Learn to customize and build modern websites from scratch using Bootstrap',
            img : bootstrapImg
        },
        {
            id: 3,
            title: 'JavaScript',
            text : 'An advanced JavaScript course for everyone! Scope, closures, prototypes, this, build your own framework, and more.',
            img : javascript
        },
        {
            id: 4,
            title: 'HTML-CSS',
            text : 'HTML and CSS for Beginners course will give your all the knowledge you need to master HTML and CSS easily and quickly.',
            img : htmlCssImg
        },
    ]);

    return (
        <div>
            <MyNavbar />
            <Container>
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

                <Row className='my-5 g-4 justify-content-center'>
                    <h2 className='py-4'>Development Courses</h2>

                    {courses.map(course => (
                        <Col key={course.id} className='d-flex align-items-stretch' md={6} lg={4} xl={3}>
                            <div className="card h-100 text-center">
                                <img src={course.img} alt={course.title} className="card-img-top img-fluid" style={{ height: '200px', objectFit: 'cover' }} />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{course.title}</h5>
                                    <p className="card-text">{course.text}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>

            <Footer/>
        </div>
    );
}

export default Home;
