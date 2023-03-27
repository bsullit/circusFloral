import { createContext, useReducer } from 'react';

export const Store = createContext();
//putting the cart items from the store on browser localStorage to keep items in cart after refresh
//if no cartItems set to empty array
const initalState = {
  cart: {
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
    // cartItems: [],
  },
};
function reducer(state, action) {
  switch (action.type) {
    case 'CART_ADD_ITEM':
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item._id === newItem._id
      );
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item._id === existItem._id ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      return { ...state, cart: { ...state.cart, cartItems } };
    case 'CART_REMOVE_ITEM': {
      //filter by _id
      const cartItems = state.cart.cartItems.filter(
        (item) => item._id !== action.payload.item._id
      );
      console.log('cartItems///', state.cart.cartItems);
      console.log('updatedCartItems', cartItems);
      //   console.log('rm item ', cartItems);
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
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
