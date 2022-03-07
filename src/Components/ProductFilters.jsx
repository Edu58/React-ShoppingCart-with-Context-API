import { Button, Form } from "react-bootstrap";
import { CartState } from "../Context/Context";
import Rating from "./Rating";

const Filters = () => {

    const { filterState:
        { byStock, byFastDelivery, byRating, sort, searchQuery },
        filterDispatch } = CartState()

    return ( 
        <div className="filters bg-dark text-light w-25 p-3 rounded">
            <h3 className="mb-4">Filter Products</h3>
            <Form sticky="left">
                <Form.Group className="mb-2">
                    <Form.Label className="lead">Ascending</Form.Label>
                    <Form.Check type="radio"
                        onChange={() => {
                            filterDispatch({
                                type: 'SORT_BY_PRICE',
                                payload: "LOW_TO_HIGH"
                        })
                        }}
                        checked={sort === "LOW_TO_HIGH" ? true : false}
                    ></Form.Check>
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Label className="lead mb-2">Descending</Form.Label>
                    <Form.Check type="radio"
                    onChange={() => {
                            filterDispatch({
                                type: 'SORT_BY_PRICE',
                                payload: "HIGH_TO_LOW"
                        })
                        }}
                        checked={sort === "HIGH_TO_LOW" ? true : false}
                    ></Form.Check>
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Label className="lead mb-2">Include out of stock</Form.Label>
                    <Form.Check type="checkbox"
                    onChange={() => {
                            filterDispatch({
                                type: 'FILTER_BY_STOCK',
                        })
                        }}
                        checked={byStock}
                    ></Form.Check>
                </Form.Group>
                <Form.Group className="mb-4">
                    <Form.Label className="lead mb-2">Fast delivery</Form.Label>
                    <Form.Check type="checkbox"
                    onChange={() => {
                            filterDispatch({
                                type: 'FILTER_BY_DELIVERY',
                        })
                        }}
                        checked={byFastDelivery}
                    ></Form.Check>
                </Form.Group>
                <Form.Group className="mb-4">
                    <Form.Label className="lead mb-2">Rating</Form.Label>
                    <p>
                        <Rating rating={byRating} click={
                            (i) => {
                                filterDispatch({
                                    type: 'FILTER_BY_RATING',
                                    payload: i
                                })
                            }
                        } />
                    </p>
                </Form.Group>

                <Button
                    onClick={() => {
                        filterDispatch({
                            type: 'CLEAR_FILTERS'
                        })
                    }
                }
                >Clear Filters</Button>
            </Form>
        </div> 
     );
}
 
export default Filters;