import { Card, Button } from "react-bootstrap";
import {GiFastArrow} from 'react-icons/gi';
import {VscPackage} from 'react-icons/vsc'
import { CartState } from "../Context/Context";
import Rating from "./Rating";

const SingleProduct = ({ product }) => {

  const { state:{cart}, dispatch } = CartState();

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>

        <Card.Title>{product.name}</Card.Title>

        <Card.Text>Price: {Number(product.price).toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD'
        })}</Card.Text>

        <Card.Text>
          {product.fastDelivery ? <span>fast delivery <GiFastArrow /> 
          </span> : <span>4 days delivery <VscPackage /> </span>}
        </Card.Text>

        <Card.Text><Rating rating={product.ratings} /></Card.Text>

        {
          cart.some(p => p.id === product.id) ? (
            <Button onClick={() => {
            dispatch({
              type:'REMOVE_FROM_CART',
              payload: product
            })}
            } 
            variant="danger">
            Remove from cart
            </Button>
          ) : (
            <Button onClick={() => {
              dispatch({
                type:'ADD_TO_CART',
                payload: product
              })}
            } 
            disabled={!product.inStock} variant="primary">{
            !product.inStock ? 'Out of stock' : 'Add to cart'
          }</Button>
          )
        }

      </Card.Body>
    </Card>
  );
};

export default SingleProduct;
