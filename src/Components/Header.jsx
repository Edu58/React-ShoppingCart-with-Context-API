import { Badge, Container, Dropdown, FormControl, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

import { Link } from "react-router-dom";
import { CartState } from "../Context/Context";

const Header = () => {

    const {state: {cart}, filterDispatch} = CartState();

    return ( 
        <Navbar bg='dark' variant="dark" sticky="top" className="d-flex justify-content-between px-4">
            <Container>
                <NavbarBrand>
                    <Link to="/" className="text-light">Big Shop</Link>
                </NavbarBrand>

                <Navbar.Text className="search">
                    <FormControl placeholder="search" className="m-auto"
                        onChange={(e) => {
                            filterDispatch({
                                type: "FILTER_BY_SEARCH",
                                payload: e.target.value
                        })
                    }}
                    />
                </Navbar.Text>

                <Nav>
                    <Dropdown className="dropstart">
                        <Dropdown.Toggle variant="warning">
                            <Badge bg="secondary">
                                {cart.length}
                            </Badge>
                            <FaShoppingCart color="white" fontSize="25px" className="mx-2" />
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="px-1">
                            {
                                cart.length > 0 ? 
                                cart.map((p => {
                                    return (
                                        <ul>
                                            <li key={p.id}>{p.name} - {Number(p.price).toLocaleString('en-US', {
                                                style: 'currency',
                                                currency: 'USD'
                                            })}</li>
                                        </ul>
                                    )
                                    
                                }))
                                : 'cart is empty'
                            }
                            <Link className="btn btn-md btn-primary w-100" to="/cart">Go to Cart</Link>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
     );
};

export default Header;