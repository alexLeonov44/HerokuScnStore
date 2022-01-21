import React from 'react';
import { useHistory } from 'react-router-dom';

export default function AddTocartButton({ addToCartOnClick, attributeKeys, attributes, inStock }) {
  const [goToTheCart, setGoToTheCart] = React.useState(false);
  const history = useHistory();
  const selectButtonOptions = () => {
    goToTheCart ? history.push('/cart') : addToCartOnClick();
    attributeKeys.length === attributes.length && setGoToTheCart(true);
  };
  React.useEffect(() => {
    setGoToTheCart(false);
  }, [attributeKeys]);
 
  return (
    <div
      onClick={() => selectButtonOptions()}
      className={`options__add-button ${inStock && 'options__add-button__disable'}`}>
      {goToTheCart ? 'go to the cart' : 'add to cart'}
    </div>
  );
}
