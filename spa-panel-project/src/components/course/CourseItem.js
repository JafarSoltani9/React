import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import reactImg from '../../assets/images/react.png'


function CourseItem({title, img, description}) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>title</Card.Title>
        <Card.Text>
            {description}
        </Card.Text>
        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card>
  );
}

export default CourseItem;
