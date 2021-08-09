import React from "react";

/*
 * This initial value is for getting better autocompletion,
 * it will not be used as it is
 */
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
