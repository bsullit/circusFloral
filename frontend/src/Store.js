import { createContext, useReducer } from 'react';

export const store = createContext();
const initalState = {
  cart: {
    cartItems: [],
  },
};

function reducer(state, action) {
  switch (action.type) {
    case 'CART_ADD_ITEM':
      return {
        ...state,
        cart: { ...state.cart },
        cartItems: [...state.cart.cartItems, action.payload],
      };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initalState);
  const value = { state, dispatch };

  return <storeProvider value={value}>{props.children}</storeProvider>;
}
