import { createContext, useReducer } from 'react';

export const Store = createContext();
const initalState = {
  cart: {
    cartItems: [],
  },
};
function reducer(state, action) {
  switch (action.type) {
    //return spread cart obj with spread cartItems array
    //plus the added item in the payload
    case 'CART_ADD_ITEM':
      return {
        ...state,
        cart: {
          ...state.cart,
          cartItems: [...state.cart.cartItems, action.payload],
        },
      };
    default:
      return state;
  }
}
//provider makes the store available to child components
export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initalState);
  const value = { state, dispatch };

  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
