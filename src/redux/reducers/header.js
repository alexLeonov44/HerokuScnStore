import {
  GET_PURCHASES_AMOUNT,
  GET_TOTAL_PRICE,
  SET_ACTIVE_CATEGORY,
  SET_ACTIVE_CURRENCY,
  SET_THUMBNAIL_CART_OPEN,
} from '../types/header';

const initialState = {
  selectedCategory: '',
  selectedCurrency: 'USD',
  currencySymbols: { USD: '$', GBP: '£', AUD: '$', JPY: '¥', RUB: '₽' },
  isThumbnailCartOpen: false,
  headerCartButtonRef: null,
  purchasesAmount: 0,
  totalPrice: 0,
};

const header = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_CATEGORY:
      return { ...state, selectedCategory: action.category };
    case SET_ACTIVE_CURRENCY:
      return { ...state, selectedCurrency: action.currency };
    case SET_THUMBNAIL_CART_OPEN:
      return { ...state, isThumbnailCartOpen: action.isOpen };
    case GET_PURCHASES_AMOUNT:
      const amount = action.purchases.reduce((sum, curr) => sum + curr.count, 0);
      return { ...state, purchasesAmount: amount };
    case GET_TOTAL_PRICE:
      const getTotalPrice = () => {
        let total = 0;
        action.purchases.forEach((el) => {
          el.prices.forEach((pr) => {
            if (pr.currency === state.selectedCurrency) total += pr.amount * el.count;
          });
        });
        return total.toFixed(2);
      };
      return { ...state, totalPrice: getTotalPrice() };
    default:
      return state;
  }
};

export default header;
