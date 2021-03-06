import { createContext, useContext, useReducer } from "react";
import faker from '@faker-js/faker';
import { cartReducer, filterReducer } from "./Reducers";

const Cart = createContext();
faker.seed(20);

const MyContext = ({children}) => {

    const products = [...Array(10)].map(() => ({
      id: faker.datatype.uuid(),
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.image.image(),
      inStock: faker.random.arrayElement([0, 3, 5, 8, 2]),
      fastDelivery: faker.datatype.boolean(),
      ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
    }));

    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: []
    })

    const [filterState, filterDispatch] = useReducer(filterReducer, {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery: ""
    });

    return (
      <Cart.Provider value={{ state, dispatch, filterState, filterDispatch }}>
        {children}
      </Cart.Provider>
    );
}
 
export default MyContext;

export const CartState = () => {
    return useContext(Cart)
};