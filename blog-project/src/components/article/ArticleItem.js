import Card from 'react-bootstrap/Card';
import { IoMdTime } from "react-icons/io";
import { TiArrowRightThick } from "react-icons/ti";
import './ArticleItem.css'

function ArticleItem() {
  return (
    <Card >
      <Card.Img variant="top" src="https://dl.next1code.ir/images/react/article1.webp" />
      <Card.Body>
        <Card.Title className='py-2'>AI Article</Card.Title>
        <Card.Text>
        This article explores the fascinating world of Artificial Intelligence, covering its current impact on various industries and the potential future developments.
        </Card.Text>
        <span className='read-more'>
          <span>Read more</span>
          <TiArrowRightThick size='25px' />
        </span>
      </Card.Body>
      <Card.Footer className='d-flex justify-content-between align-items py-3'>
        <span>Author: Jafar Soltani</span>
        <span>10 min <IoMdTime /> </span>
      </Card.Footer>
    </Card>
  );
}

export default ArticleItem;
