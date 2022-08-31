import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import ProductCard from "./ProductCard";

const Products = (props) => {
  const { products } = useContext(GlobalContext);


    return (
      <div className="products-container">
        {products.map((data) => (
          <ProductCard key={data.id} product={data} />
        ))}
      </div>
    );
  };

export default Products;