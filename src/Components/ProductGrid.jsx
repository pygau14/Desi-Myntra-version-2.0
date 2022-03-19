import React from "react";
import Product from "./Product.jsx";

class ProductGrid extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <h2> Products list</h2>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {this.props.products.map((product) => {
            return <Product prod={product} />;
          })}
          ;
        </div>
      </>
    );
  }
}

export default ProductGrid;
