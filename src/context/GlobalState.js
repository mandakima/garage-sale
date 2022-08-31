import React, { createContext, useReducer } from "react";
import productsReducer from "./productsReducer";

const initialState = {
  products: [],
  productsInCart: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(productsReducer, initialState);

  const initializeState = (items) => {
    dispatch({
      type: "INITIALIZE",
      items: items,
    });
  };

  //ACTIONS
  const addItem = (item) => {
    dispatch({
      type: "ADD_ITEM",
      product: item,
    });
  };

  const removeItem = (id) => {
    dispatch({
      type: "REMOVE_ITEM",
      id: id,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        products: state.products,
        productsInCart: state.productsInCart,
        initializeState,
        addItem,
        removeItem,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};