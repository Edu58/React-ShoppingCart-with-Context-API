import { Badge, Container, Dropdown, FormControl, Nav, Navbar, NavbarBrand, NavDropdown } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";

const Header = () => {
    return ( 
        <Navbar bg='dark' variant="dark">
            <Container>
                <NavbarBrand>
                    <a href="/" className="text-light">Big Shop</a>
                </NavbarBrand>

                <Navbar.Text className="search">
                    <FormControl placeholder="search" className="m-auto"/>
                </Navbar.Text>

                <Nav>
                    <Dropdown alignright>
                        <Dropdown.Toggle variant="warning">
                            <Badge bg="secondary">
                                {/* {100} */}
                            </Badge>
                            <FaShoppingCart color="white" fontSize="25px" />
                        </Dropdown.Toggle>

                        <DropdownMenu className="text-center">
                            cart is empty
                        </DropdownMenu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
     );
}
 
export default Header;