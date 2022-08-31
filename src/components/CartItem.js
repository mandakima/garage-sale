import React, { useContext } from "react";
import { IoAdd, IoRemove } from "react-icons/io5";
import { GlobalContext } from "../context/GlobalState";

const CartItem = (props) => {
  const { addItem, removeItem } = useContext(GlobalContext);
  const { product } = props;
  const addToCart = () => addItem(product);
  const removeFromCart = () => removeItem(product.id);

  return (
    <div className="cart-item">
      <img src={product.image} alt={product.title}/>
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <p>Quantity: {product.quantity}</p>
      <div className="buttons-container">
        <IoRemove onClick={removeFromCart} className="remove-button" />
        <IoAdd onClick={addToCart} className="add-button" />
      </div>
    </div>
  );
};

export default CartItem;