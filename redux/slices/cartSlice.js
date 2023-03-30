import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [
    {
      id: 1,
      name: "Paracetamol",
      img: "",
      price: 520,
      quantity: 1,
      totalCost: 520,
    },
    {
      id: 2,
      name: "Chloraphenicol",
      img: "",
      price: 650,
      quantity: 1,
      totalCost: 650,
    },
  ],
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const itemIsInCart = state.find((prod) => prod.id === product.id);

      if (!itemIsInCart) {
        state.push({
          ...product,
          // totalCost: product.price ,
        });
      } else {
        const prod_index = state.map((prod) => prod.id).indexOf(product.id);

        let productCopy = state[prod_index];
        productCopy.quantity += 1;
        productCopy.totalCost = productCopy.quantity * productCopy.price;

        state[prod_index] = productCopy;
      }
    },
    removeFromCart: (state, action) => {
      const product = action.payload;
      return state.filter((prod) => prod.id !== product.id);
    },
    reduceQuantity: (state, action) => {
      const product = action.payload;
      const prod_index = state.map((prod) => prod.id).indexOf(product.id);

      let productCopy = state[prod_index];

      if (productCopy.quantity > 1) {
        productCopy.quantity -= 1;
        productCopy.totalCost = productCopy.quantity * productCopy.price;

        state[prod_index] = productCopy;
      } else {
        state = state.filter((prod) => prod.id !== product.id);
      }
    },
    increaseQuantity: (state, action) => {
      const productId = action.payload.id;
      const prod_index = state.map((prod) => prod.id).indexOf(productId);
      const productCopy = { ...state[prod_index] };
      productCopy.quantity += 1;
      productCopy.totalCost = productCopy.quantity * productCopy.price;

      state[prod_index] = productCopy;
    },
  },
});

export const { addToCart, removeFromCart, reduceQuantity, increaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
