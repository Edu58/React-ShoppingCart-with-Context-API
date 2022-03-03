import { Card, Button } from "react-bootstrap";
import {GiFastArrow} from 'react-icons/gi';
import {VscPackage} from 'react-icons/vsc'
import Rating from "./Rating";

const SingleProduct = ({ product }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>Price: ${product.price}</Card.Text>
        <Card.Text>{product.fastDelivery ? <span>fast delivery <GiFastArrow /> </span> : <span>4 days delivery <VscPackage /> </span>}</Card.Text>
        <Card.Text><Rating rating={product.ratings} /></Card.Text>
        <Button variant="primary"> Add to Cart </Button>
      </Card.Body>
    </Card>
  );
};

export default SingleProduct;
