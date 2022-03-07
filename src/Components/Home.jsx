import { CartState } from "../Context/Context";
import SingleProduct from "./SingleProduct";
import { Row, Col } from "react-bootstrap";
import Filters from "./ProductFilters";

const Home = () => {

    const { state: {products}, filterState:
        { byStock, byFastDelivery, byRating, sort, searchQuery } } = CartState();
    
    const transformProducts = () => {
        let sortedProducts = products;

        if (sort) {
            sortedProducts = sortedProducts.sort((a, b) => 
                sort === 'LOW_TO_HIGH' ? a.price - b : b.price - a.price
            )
        }

        if (!byStock) {
            sortedProducts = sortedProducts.filter((prod) => prod.inStock)
        }

        if (byFastDelivery) {
            sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery)
        }

        if (byRating) {
            sortedProducts = sortedProducts.filter((prod) => prod.ratings >= byRating)
        }

        if (searchQuery) {
            sortedProducts = sortedProducts.filter((prod) => prod.name.toLowerCase().includes(searchQuery))
        }

        return sortedProducts;
    }

    return ( 
        <div className="Home mt-5 d-flex">
            <Filters />
            <div className="container">
                <Row xs={1} md={2} lg={3} className="g-5">
                    {transformProducts().map((product) => {
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