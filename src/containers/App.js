import React from "react";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";

const App = () => (
  <div className="wrapper">
    <div className="app">
      <h2>Shopping Cart</h2>
      <hr />
      <ProductsContainer />
      <hr />
      <CartContainer />
    </div>
  </div>
);

export default App;
