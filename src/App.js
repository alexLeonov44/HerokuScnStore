import Header from './components/Header';
import ProductsOverview from './components/ProductsOverview';
import SelectedProductOveriew from './components/SelectedProductOveriew';
import Cart from './components/Cart';

import {  Route } from 'react-router-dom';
import ThumbnailCart from './components/ThumbnailCart';
import React from 'react';
import { connect } from 'react-redux';

import { setItemFromLocalStorage } from './redux/actions/cart';
import CheckOutForm from './components/CheckOutForm';

class App extends React.PureComponent {
  componentDidUpdate(prevProps){
    if (
      this.props.purchases !== prevProps.purchases 
     
    ) {
      localStorage.setItem('cart', JSON.stringify(this.props.purchases));
      // console.log(JSON.parse(localStorage.getItem("cart")));
    }
  }
  componentDidMount(){
    const items = JSON.parse(localStorage.getItem("cart"))
    if(!this.props.purchases.length && items){
      this.props.setItemFromLocalStorage(items)
    }
  }
  render() {
    const { isThumbnailCartOpen } = this.props;
    return (
      <div className="wrapper">
        <Header />
        {isThumbnailCartOpen && <ThumbnailCart />}
        <Route exact path="/" render={() => <ProductsOverview />} />
        <Route exact path="/product/:productId" render={() => <SelectedProductOveriew />} />
        <Route exact path="/cart" render={() => <Cart />} />
        <Route exact path="/check-out" render={() => <CheckOutForm />} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    purchases: state.cart.purchases,
    isThumbnailCartOpen: state.header.isThumbnailCartOpen,
  };
};
export default connect(mapStateToProps,{setItemFromLocalStorage})(App);
