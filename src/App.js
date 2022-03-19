import React from "react";
import ProductGrid from "./Components/ProductGrid";
import Search from "./Components/Search";
import products from "./Components/Constant.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      productList: products,
      backupList: products
    };
  }
  updateProducts = (newProducts) => {
    this.setState({
      backupList: newProducts,
      loading: false
    });
  };

  componentDidMount() {
    this.setState({
      loading: true
    });
    fetch("https://api.jsonbin.io/b/6236424ba703bb67492ffe39")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          productList: data,
          loading: false
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }
  render() {
    return (
      <>
        <h1>Desi Myntra</h1>
        <Search
          products={this.state.productList}
          updateProducts={this.updateProducts}
        />

        {/* if loading then loader else product grid list */}
        {this.state.loading ? (
          <h3>Loading</h3>
        ) : (
          <ProductGrid products={this.state.backupList} />
        )}
      </>
    );
  }
}
export default App;
