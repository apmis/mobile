export const isLoggedInState = (state = false, action) => {
  switch (action.type) {
    case "login":
      return true;
    case "logout":
      return false;
    default:
      return state;
  }
};

const cartItems = [
  {
    id: 1,
    product_name: "Paracetamol",
    img: "",
    price: 520,
    quantity: 1,
    total: function () {
      return this.price * this.quantity;
    },
  },
  {
    id: 2,
    product_name: "Chloraphenicol",
    img: "",
    price: 650,
    quantity: 1,
    total: function () {
      return this.price * this.quantity;
    },
  }
];

export const cartState = (state = cartItems, action) => {
  let product = action.product;
  switch (action.type) {
    case "addToCart":
      const itemIsInCart = state.find((prod) => prod.id == product.id);

      if (!itemIsInCart) {
        let newProd = {
          ...product,
          total: function () {
            return this.price * this.quantity;
          },
        };

        return [...state, newProd];
      } else {
        const prod_index = state.map((prod) => prod.id).indexOf(product.id);

        let productCopy = state[prod_index];
        productCopy.quantity += 1;
        productCopy = {
          ...productCopy,
          total: function () {
            return this.price * this.quantity;
          },
        };

        state[prod_index] = productCopy;

        return state;
      }
    case "removeFromCart":
      return state.filter((prod) => prod.id != product.id);
    case "reduceQuantity":
      const prod_index = state.map((prod) => prod.id).indexOf(product.id);

      let productCopy = state[prod_index];

      if (productCopy.quantity > 1) {
        productCopy.quantity -= 1;
        productCopy = {
          ...productCopy,
          total: function () {
            return this.price * this.quantity;
          },
        };
        state[prod_index] = productCopy;
        return state;
      } else {
        return state.filter((prod) => prod.id != product.id);
      }

    default:
      return state;
  }
};

export const reRender = (state = false, action) => {
  switch (action.type) {
    case "render":
      return !state;
    default:
      return state;
  }
};
