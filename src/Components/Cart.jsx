import { useEffect, useState } from "react";
import { Button, Card, Container, Form, Table } from "react-bootstrap";
import { CartState } from "../Context/Context";
import { FaTrashAlt } from "react-icons/fa";

const Cart = () => {

    const {state:{cart}, dispatch} = CartState();

    const [totalPrice, setTotalPrice] = useState();

    useEffect(() =>{
        setTotalPrice(cart.reduce((acc, curr) => acc + Number(curr.price)*curr.qty, 0))
    }, [cart])

    return ( 
        <Container className="d-flex justify-content-between">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((p, i) => {
                            return (
                                <tr key={i}>
                                    <td className="w-25">
                                        <img src={p.image} className="img-fluid"></img>
                                    </td>
                                    <td>{p.name}</td>
                                    <td>{Number(p.price).toLocaleString('en-US', {
                                        style: 'currency',
                                        currency: 'USD',
                                    })}</td>
                                    <td>
                                        <Form.Control as='select' value={p.qty} onChange={
                                            (e) => {
                                                dispatch({
                                                    type: "CHANGE_CART_QUANTITY",
                                                    payload: {
                                                        id: p.id,
                                                        qty: e.target.value
                                                    }
                                                })
                                            }
                                        }>
                                            {[...Array(p.inStock).keys()].map((x) => {
                                                return (
                                                    <option key={x + 1}>{ x + 1 }</option>
                                                )
                                            })}
                                        </Form.Control>
                                    </td>
                                    <td>
                                        <FaTrashAlt size='20'
                                            onClick={() => {
                                                dispatch({
                                                    type: 'REMOVE_FROM_CART',
                                                    payload: p
                                            })
                                        }}
                                        />
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            <Card style={{marginLeft: '2rem', minHeight: '90vh'}}>
                <Card.Body className="d-flex flex-column justify-content-between bg-dark text-light">
                    <div className="fw-bolder fs-2">
                        <Card.Title className="mb-4">Total Price</Card.Title>
                        <Card.Text>$ { totalPrice }</Card.Text>
                    </div>
                    <Button>Proceed to checkout</Button>
                </Card.Body>
            </Card>

        </Container>
     );
}
 
export default Cart;