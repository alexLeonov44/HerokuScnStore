import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import SelectedProductImages from '../pages/SelectedProductOveriew/SelectedProductImages';
import SelectedProductOptions from '../pages/SelectedProductOveriew/SelectedProductOptions';

import { graphql } from '@apollo/client/react/hoc';

import { withRouter } from 'react-router-dom';
import { addProductToCart } from '../redux/actions/cart';
import { SELECTED_PROD_TARCKS } from '../gqlQueries';
import SelectedProductLoader from '../Helpers/SelectedProductLoader';

class SelectedProductOveriew extends React.PureComponent {
  state = {};
  setActiveAttribute = (key, val) => {
    this.setState((state) => ({
      [key]: val,
    }));
  };
  addToCart = () => {
    const { id, brand, name, prices, gallery } = this.props.data.product;
    const selectedProduct = {
      id: id,
      attributes: Object.entries(this.state).map(([name, value]) => ({ name, value })),
      brand: brand,
      name: name,
      prices: prices,
      gallery: gallery,
      count: 1,
    };
    this.props.addProductToCart(selectedProduct);
  };
  render() {
    const { selectedCurrency, currencySymbols } = this.props;
    const { product } = this.props.data;
    if (!product) return <SelectedProductLoader />
    return (
      <div className="selectedProduct">
        <SelectedProductImages
          gallery={product.gallery}
          setSelectedImage={this.setSelectedImage}
          selectedImage={this.state.selectedImage}
        />
        <SelectedProductOptions
          {...product}
          setActiveAttribute={this.setActiveAttribute}
          addToCart={this.addToCart}
          activeAttributes={this.state}
          selectedCurrency={selectedCurrency}
          currencySymbols={currencySymbols}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedCurrency: state.header.selectedCurrency,
  currencySymbols: state.header.currencySymbols,
});
const gqOptions = {
  options: (props) => ({
    variables: {
      productId: props.match.params.productId,
    },
  }),
};

export default compose(
  connect(mapStateToProps, { addProductToCart }),
  withRouter,
  graphql(SELECTED_PROD_TARCKS, gqOptions),
)(SelectedProductOveriew);
