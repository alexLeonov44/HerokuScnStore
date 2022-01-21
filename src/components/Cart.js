import React from 'react';
import { connect } from 'react-redux';
import cartEmptyLogo from '../assets/cartEmptyLogo.svg';

import PurchasesCard from '../pages/cart/PurchasesCard';
import { cartProductOnPlus, cartProductOnMinus, removeProductInCart } from '../redux/actions/cart';
class Cart extends React.PureComponent {

  
  render() {
    const {
      purchases,
      selectedCurrency,
      currencySymbols,
      cartProductOnPlus,
      cartProductOnMinus,
      removeProductInCart,
    } = this.props;
    
    return (
      <div className="cart">
        <div className="c-heading">
          <h2>cart</h2>
        </div>
        {!purchases.length && (
          <div className="cart__empty">
            <img style={{ width: 170 }} src={cartEmptyLogo} alt="" />
            <p>Cart is empty! Take something!)</p>
          </div>
        )}
        {purchases.map((product, i) => (
          <PurchasesCard
            key={product.id + i}
            product={product}
            selectedCurrency={selectedCurrency}
            currencySymbols={currencySymbols}
            cartProductOnPlus={cartProductOnPlus}
            cartProductOnMinus={cartProductOnMinus}
            removeProductInCart={removeProductInCart}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  purchases: state.cart.purchases,
  selectedCurrency: state.header.selectedCurrency,
  currencySymbols: state.header.currencySymbols,
});
export default connect(mapStateToProps, {
  cartProductOnPlus,
  cartProductOnMinus,
  removeProductInCart,
})(Cart);
