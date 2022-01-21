import React from 'react';
import plusIcon from '../../assets/iconPlus.svg';

export default function CartRemoveButton({ cardHover, removeProductInCart, product }) {
  return (
    <div style={{ visibility: cardHover }} className="c-purchases-card__remove-btn">
      <button onClick={() => removeProductInCart(product)}>
        <img src={plusIcon} alt="" />
      </button>
    </div>
  );
}
