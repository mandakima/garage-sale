import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const ProductCard = (props) => {
  const { addItem } = useContext(GlobalContext);
  const { product } = props;
  const addToCart = () => addItem(product);

  return (
    <div className="product">
      <img src={product.image} alt={product.title} />
      <div>
        <span id="title">{product.title}</span>
        <span id="price">Price: ${product.price}</span>
      </div>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;