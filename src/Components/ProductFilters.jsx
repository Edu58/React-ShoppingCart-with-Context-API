import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Rating from "./Rating";

const Filters = () => {

    const [rating, setRating] = useState(0);

    return ( 
        <div className="filters bg-dark text-light w-25 p-3 rounded">
            <h3 className="mb-4">Filter Products</h3>
            <Form sticky="left">
                <Form.Group className="mb-2">
                    <Form.Label className="lead">Ascending</Form.Label>
                    <Form.Check type="radio"></Form.Check>
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Label className="lead mb-2">Descending</Form.Label>
                    <Form.Check type="radio"></Form.Check>
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Label className="lead mb-2">Include out of stock</Form.Label>
                    <Form.Check type="checkbox"></Form.Check>
                </Form.Group>
                <Form.Group className="mb-4">
                    <Form.Label className="lead mb-2">Fast delivery</Form.Label>
                    <Form.Check type="checkbox"></Form.Check>
                </Form.Group>
                <Form.Group className="mb-4">
                    <Form.Label className="lead mb-2">Rating</Form.Label>
                    <p><Rating rating={rating} click={setRating} /></p>
                </Form.Group>

                <Button>Clear Filters</Button>
            </Form>
        </div> 
     );
}
 
export default Filters;