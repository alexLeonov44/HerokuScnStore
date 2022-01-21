import React from 'react';

import currencyDownButton from '../../assets/currencyDownButton.svg';
import currencyUpButton from '../../assets/currencyUpButton.svg';

export default function CurrencyBlock({ currencies= [], setActiveCurrency, currencySymbols ,setThumbnailCartOpen,}) {
  const [currencyBlockVisible, setCurrencyBlockVisible] = React.useState(false);
  const currensyRef = React.useRef();

  const currencyButtonOnClick = () => {
    setThumbnailCartOpen(false)
    setCurrencyBlockVisible((prev) => !prev);
  };
  const handleOutsideClick = (e) => {
    if (!e.path.includes(currensyRef.current)) {
      setCurrencyBlockVisible(false);
    }
  };
  React.useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);
  return (
    <div className="hrc-currency">
      <span>$</span>
      <img
        ref={currensyRef}
        onClick={() => currencyButtonOnClick()}
        className="hrc-currency_button"
        src={currencyBlockVisible ? currencyUpButton : currencyDownButton}
        alt="backButton"></img>
      <div className="hrc-currency__info">
        {currencyBlockVisible &&
          currencies.map((cur, i) => (
            <p key={cur + i} onClick={() => setActiveCurrency(cur)}>
              {currencySymbols[cur] + ' ' + cur}
            </p>
          ))}
      </div>
    </div>
  );
}
