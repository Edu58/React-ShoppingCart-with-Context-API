import { CartState } from "../Context/Context";
import SingleProduct from "./SingleProduct";
import { Row, Col } from "react-bootstrap";
import Filters from "./ProductFilters";

const Home = () => {

    const { state: {products} } = CartState();
    console.log(products)

    return ( 
        <div className="Home mt-5 d-flex">
            <Filters />
            <div className="container">
                <Row xs={1} md={2} lg={3} className="g-5">
                    {products.map((product) => {
                        return (
                            <Col key={product.id}>
                                <SingleProduct product={product}/>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        </div>
     );
}
 
export default Home;