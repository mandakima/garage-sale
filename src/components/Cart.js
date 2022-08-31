import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import CartItem from "./CartItem";

const Cart = () => {
  const { productsInCart } = useContext(GlobalContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const cartBackground = document.getElementById("cart-background");
    const cart = document.getElementById("cart");
    const closeCart = () => {
      cartBackground.style.width = "0px";
      cart.style.width = "0px";
    };

    cartBackground.addEventListener("click", closeCart);

    return () => cartBackground.removeEventListener("click", closeCart);
  }, []);

  useEffect(() => {
    const calculateTotal = () => {
      const totalPrice = productsInCart.reduce(
        (previousValue, currentValue) => {
          return previousValue + currentValue.price * currentValue.quantity;}, 0
      );

      setTotal(Math.round(totalPrice));
    };
    
    calculateTotal();
  }, [productsInCart]);

  return (
    <div className="cart-container">
      <div id="cart">
        <h2 className="title">Cart</h2>
        <div className="cart-items-container">
          {productsInCart.map((product) => {
            return <CartItem product={product} key={product.id} />;
          })}
        </div>
        <h2 className="total">Total: ${total}</h2>
        <h5 className="total">Taxes, fees, charges, and upcharge to be determined by me. </h5>
        <button>Checkout</button>
      </div>
      <div id="cart-background"></div>
    </div>
  );
};

export default Cart;