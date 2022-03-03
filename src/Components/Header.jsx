import { Badge, Dropdown, FormControl, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import { Link } from "react-router-dom";
import { CartState } from "../Context/Context";

const Header = () => {

    const {state: {cart}} = CartState();

    return ( 
        <Navbar bg='dark' variant="dark" sticky="top" className="d-flex justify-content-between px-4">
                <NavbarBrand>
                    <Link to="/" className="text-light">Big Shop</Link>
                </NavbarBrand>

                <Navbar.Text className="search">
                    <FormControl placeholder="search" className="m-auto"/>
                </Navbar.Text>

                <Nav>
                    <Dropdown>
                        <Dropdown.Toggle variant="warning">
                            <Badge bg="secondary">
                                {cart.length}
                            </Badge>
                            <FaShoppingCart color="white" fontSize="25px" className="mx-2" />
                        </Dropdown.Toggle>

                        <DropdownMenu className="text-center">
                            cart is empty
                        </DropdownMenu>
                    </Dropdown>
                </Nav>
        </Navbar>
     );
};

export default Header;