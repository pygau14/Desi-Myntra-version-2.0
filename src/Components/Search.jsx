import React from "react";

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: ""
    };
  }
  handleChange = (event) => {
    const filterValue = event.target.value;
    //filter products whose title
    //contains filterValue
    const filterProducts = this.props.products.filter((product) => {
      return product["product-name"].includes(filterValue);
    });
    this.props.updateProducts(filterProducts);
  };
  render() {
    return (
      <>
        <input
          placeholder="Seach Product"
          value={this.state.inputValue}
          onChange={(e) => {
            this.handleChange(e);
            this.setState({
              inputValue: e.target.value
            });
          }}
        />
        <h2>{this.state.inputValue}</h2>
      </>
    );
  }
}

export default Search;
