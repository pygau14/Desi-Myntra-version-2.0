import React from "react";
import "./Product.css";

class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <img src={this.props.prod["product-image-url"]} className="img-rect" />
        <h3>{this.props.prod["product-name"]}</h3>
      </div>
    );
  }
}
export default Product;
