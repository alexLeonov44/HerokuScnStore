import React from 'react';
import productInCartIcon from '../../assets/productInCartIcon.svg';

export default function ProductItemCard({ product, selectedCurrency, currencySymbols, purchases }) {
  const { gallery, brand, name, prices, inStock } = product;
  const img = gallery[0];
  const { amount } = prices.find((price) => price.currency === selectedCurrency);
  const productInCart = purchases.some((prod) => prod.name === name);
  return (
    <div className="products__productItem_card">
      <div
        className={`products__productItem_card__img ${
          inStock && 'products__productItem_card__img__out_of_stock '
        } `}>
        <img src={img} alt="productItem card" />
      </div>
      {productInCart && (
        <div className="products__productItem_card__in-cart-icon">
          <img src={productInCartIcon} alt="" />
        </div>
      )}
      <div className="products__productItem_card__name">
        <p>{brand + ' ' + name}</p>
      </div>
      <div className="products__productItem_card__price">
        <p>{currencySymbols[selectedCurrency] + ' ' + amount}</p>
      </div>
    </div>
  );
}
