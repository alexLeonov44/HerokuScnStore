import React from 'react';
import plusSquare from '../../assets/cartPlusSquare.svg';
import minusSquare from '../../assets/cartMinusSquare.svg';
import CartRemoveButton from './CartRemoveButton';
import PurchasesCardSlider from './PurchasesCardSlider';
import DeleteItemButton from './DeleteItemButton';

export default function PurchasesCard({
  product,
  selectedCurrency,
  currencySymbols,
  cartProductOnPlus,
  cartProductOnMinus,
  removeProductInCart,
}) {
  const { brand, name, prices, attributes, count, gallery } = product;
  const { amount } = prices.find((price) => price.currency === selectedCurrency);
  const [cardHover, setcardHover] = React.useState('hidden');

  const onMouseEnterHandler = () => {
    setcardHover('visible');
  };
  const onMouseLeaveHandler = () => {
    setcardHover('hidden');
  };

  return (
    <div
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
      className="c-purchases-card">
      <div className="c-purchases-card__left-side">
        <div className="c-purchases-card__left-side__name">
          <h3>{brand}</h3>
          <h4>{name}</h4>
        </div>
        <div className="c-purchases-card__left-side__price">
          <i>{currencySymbols[selectedCurrency]}</i>
          <span>{amount}</span>
        </div>
        <PurchasesCardAttributes attributes={attributes} />
      </div>
      <CartRemoveButton
        cardHover={cardHover}
        removeProductInCart={removeProductInCart}
        product={product}
      />
      <div className="c-purchases-card__right-side">
        <PurchasesCardCounter
          cartProductOnPlus={cartProductOnPlus}
          cartProductOnMinus={cartProductOnMinus}
          product={product}
          count={count}
          removeProductInCart={removeProductInCart}
        />
        <PurchasesCardSlider gallery={gallery} />
      </div>
    </div>
  );
}

const PurchasesCardAttributes = ({ attributes }) => {
  return (
    <div className="c-purchases-card__left-side__attribute">
      {attributes.map((attr, i) => (
        <div
          key={attr.value + i}
          className={`c-purchases-card__left-side__attribute__item`}
          style={{ background: attr.value, height: 45 }}>
          {attr.name !== 'Color' && attr.value}
        </div>
      ))}
    </div>
  );
};
const PurchasesCardCounter = ({ cartProductOnPlus, cartProductOnMinus, count, product,removeProductInCart }) => {
  return (
    <div className="c-purchases-card__right-side__count">
      <img onClick={() => cartProductOnPlus(product)} src={plusSquare} alt="plus-square" />
      <span>{count}</span>
      {count === 1 ? (
        <DeleteItemButton removeProductInCart={removeProductInCart} product={product}/>
      ) : (
        <img onClick={() => cartProductOnMinus(product)} src={minusSquare} alt="minus-square" />
      )}
    </div>
  );
};
