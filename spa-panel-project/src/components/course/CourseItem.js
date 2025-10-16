import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import './CourseItem.css';

function CourseItem({ title, img, text, id }) {
  return (
    <Card className="course-card">
      <Card.Img variant="top" src={img} className="card-img-top" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="primary">
          <Link to={`/course/${id}`} className="buy-btn">Buy</Link>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CourseItem;
