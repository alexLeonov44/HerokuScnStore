import React from 'react';
import cartSliderBtn from '../../assets/currencyDownButton.svg';

export default function PurchasesCardSlider({ gallery }) {
  const [images, setImages] = React.useState(null);
  React.useEffect(() => {
    if (gallery.length) setImages(0);
  }, [gallery.length]);
  const leftBtnGalleryOnClick = () => {
    if (images > 0) setImages((curr) => curr - 1);
  };
  const rightBtnGalleryOnClick = () => {
    if (images !== gallery.length - 1) setImages((curr) => curr + 1);
  };
  return (
    <div className="c-purchases-card__right-side__images">
      <img
        onClick={leftBtnGalleryOnClick}
        style={{ width: 10 }}
        className={`c-purchases-card__right-side__images__left-btn ${
          images === 0 && 'c-purchases-card__right-side__images__left-btn__disable'
        }`}
        src={cartSliderBtn}
        alt="cartSliderLeft"
      />
      {
        <div className="c-purchases-card__right-side__images__slider">
          <img src={gallery[images]} alt="images-slider" />
        </div>
      }
      <img
        onClick={rightBtnGalleryOnClick}
        style={{ width: 10 }}
        className={`c-purchases-card__right-side__images__right-btn ${
          images === gallery.length - 1 &&
          'c-purchases-card__right-side__images__right-btn__disable'
        }`}
        src={cartSliderBtn}
        alt="cartSliderRight"
      />
    </div>
  );
}
