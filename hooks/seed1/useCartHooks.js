import { useDispatch } from "react-redux";
import { handleCartAction, renderAction } from "../../redux/actions";

export function useCartHooks(setProduct) {
  const dispatch = useDispatch();
  //   const cartItems = useSelector((state) => state.cartState);

  const addToCart = (product) => {
    dispatch(handleCartAction("addToCart", product));
    dispatch(renderAction("render"));
  };

  const increaseProductQuantity = (product) => {
    setProduct({ ...product, quantity: product.quantity + 1 });
    dispatch(renderAction("render"));
  };

  const decreaseProductQuantity = (product) => {
    if (product.quantity > 1) {
      setProduct({ ...product, quantity: product.quantity - 1 });
    }
    dispatch(renderAction("render"));
  };

  const removeProduct = (product) => {
    dispatch(handleCartAction("removeFromCart", product));
    dispatch(renderAction("render"));
  };

  const reduceQuantity = (product) => {
    dispatch(handleCartAction("reduceQuantity", product));
    dispatch(renderAction("render"));
  };

  return {
    addToCart,
    increaseProductQuantity,
    decreaseProductQuantity,
    removeProduct,
    reduceQuantity,
  };
}
