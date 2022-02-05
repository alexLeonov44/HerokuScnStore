import React from 'react';
import { connect } from 'react-redux';
import Tcard from '../pages/ThumbnailCart/Tcard';
import { getTotalPrice, setThumbnailCartOpen } from '../redux/actions/header';
import { cartProductOnPlus, cartProductOnMinus } from '../redux/actions/cart';
import cartEmptyLogo from '../assets/cartEmptyLogo.svg';
import { Link ,withRouter} from 'react-router-dom';
import { setAuth } from '../redux/actions/auth';

class ThumbnailCart extends React.PureComponent {
  constructor(props) {
    super(props);
    this.cartOverlayRef = React.createRef();
    this.thumbnaillCartRef = React.createRef();
  }
  handleOutsideClick = (e) => {
    if (!e.path.includes(this.thumbnaillCartRef.current)) {
      this.props.setThumbnailCartOpen(false);
    }
  };

  componentDidMount() {
    this.cartOverlayRef.current.addEventListener('click', this.handleOutsideClick);
  }
  componentWillUnmount() {
    this.cartOverlayRef.current.removeEventListener('click', this.handleOutsideClick);
  }
  

  render() {
    const {
      purchases,
      selectedCurrency,
      currencySymbols,
      cartProductOnPlus,
      cartProductOnMinus,
      purchasesAmount,
      totalPrice,
      isAuth
    } = this.props;
    const checkout = () => {
      if(isAuth){
        localStorage.clear()
        this.props.setAuth(null)
      }{
         this.props.history.push({
          pathname: `/check-out`,
      }) 
      }
      
    };
    
    return (
      <div ref={this.cartOverlayRef} className="t-cart__overlay">
        <div ref={this.thumbnaillCartRef} className="t-cart">
          <div className="t-cart__total-purchases">
            <span className="t-cart__total-purchases__myBag">My Bag,</span>
            <span className="t-cart__total-purchases__total">{purchasesAmount} items</span>
          </div>
          {!purchases.length && (
            <div className="t-cart__empty">
              <img style={{ width: 30 }} src={cartEmptyLogo} alt="" />
              <br />
              <p>Cart is empty! Take something!)</p>
            </div>
          )}
          {purchases.map((product, i) => (
            <Tcard
              key={product.id + i}
              product={product}
              selectedCurrency={selectedCurrency}
              currencySymbols={currencySymbols}
              cartProductOnPlus={cartProductOnPlus}
              cartProductOnMinus={cartProductOnMinus}
            />
          ))}
          <div className="t-cart__total">
            <span>Total</span>
            <span>
              <i>{currencySymbols[selectedCurrency]}</i>
              {totalPrice}
            </span>
          </div>
          <div className="t-cart__btn-block">
            <Link to="/cart">
              <button className="t-cart__btn-block__to-cart">view bag</button>
            </Link>
            <button onClick={checkout} className="t-cart__btn-block__check-out">
              {
                isAuth ?
                'Sign out'
                :
                'Sign in'
              }
            </button>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    purchases: state.cart.purchases,
    selectedCurrency: state.header.selectedCurrency,
    currencySymbols: state.header.currencySymbols,
    purchasesAmount: state.header.purchasesAmount,
    totalPrice: state.header.totalPrice,
    isAuth:state.auth.isAuth
  };
};

export default connect(mapStateToProps, {
  setThumbnailCartOpen,
  cartProductOnPlus,
  cartProductOnMinus,
  getTotalPrice,
  setAuth
})(withRouter(ThumbnailCart)); 
