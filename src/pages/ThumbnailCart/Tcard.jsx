import React from 'react';
import plusSquare from '../../assets/cartPlusSquare.svg';
import minusSquare from '../../assets/cartMinusSquare.svg';
export default function Tcard({
  product,
  selectedCurrency,
  currencySymbols,
  cartProductOnPlus,
  cartProductOnMinus,
}) {
  const { brand, name, prices, attributes, count, gallery } = product;
  const { amount } = prices.find((price) => price.currency === selectedCurrency);
  return (
    <div className="t-cart__card">
      <div className="t-cart__card__left-side">
        <div className="t-cart__card__left-side__name">
          <p>{brand}</p>
          <p>{name}</p>
        </div>
        <div className="t-cart__card__left-side__price">
          <i>{currencySymbols[selectedCurrency]}</i>
          <span>{amount}</span>
        </div>
        <div className="t-cart__card__left-side__attributes">
          {attributes.map((attr, i) => (
            <div
              key={attr.value + i}
              className={`t-cart__card__left-side__attributes__item`}
              style={{ background: attr.value }}>
              {attr.name !== 'Color' && attr.value}
            </div>
          ))}
        </div>
      </div>
      <div className="t-cart__card__right-side">
        <div className="t-cart__card__right-side__counter">
          <img onClick={() => cartProductOnPlus(product)} src={plusSquare} alt="plus-square" />
          <span>{count}</span>
          <img
            className={`${count === 1 && 't-cart__card__right-side__counter__minus-disable'}`}
            onClick={() => cartProductOnMinus(product)}
            src={minusSquare}
            alt="minus-square"
          />
        </div>
        <div className="t-cart__card__right-side__photo">
          <img src={gallery[0]} alt="" />
        </div>
      </div>
    </div>
  );
}
