import React, { useState, useEffect, useContext } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { GlobalContext } from "./context/GlobalState";
import Products from "./components/Products";
import NavigationBar from "./components/NavigationBar";
import Cart from "./components/Cart";


function App() {
  const { initializeState } = useContext(GlobalContext);
  const [setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        const items = json.filter((element) =>
          element.category.includes("")
        );
        initializeState(items);
        setLoading(false);
      });
  }, []);

  return (
    <HashRouter>
      <NavigationBar />
      <Cart />
      <h1>Welcome to my Garage Sale!</h1>
      <h2>I got a lot of stuff in my old garage that keeps multiplying. Make it stop! </h2>
      <Products />
    </HashRouter>
  );
}

export default App;