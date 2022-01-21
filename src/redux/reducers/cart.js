import {
  ADD_PRODUCT_TO_CART,
  CART_PRODUCT_ON_MINUS,
  CART_PRODUCT_ON_PLUS,
  REMOVE_PRODUCT_IN_CART,
  SET_ITEM_FROM_LOCAL_STORAGE,
} from '../types/cart';

const initialState = {
  purchases: [],
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      let newState = { ...state, purchases: [...state.purchases] };
      const match = newState.purchases.find(
        (item) =>
          item.id === action.product.id &&
          item.attributes.every((el, i) => el.value === action.product.attributes[i].value),
      );
      if (!match) {
        newState.purchases.push(action.product);
      } else {
        const mock = { ...match };
        newState.purchases.map((el, index, self) => {
          if (
            el.id === mock.id &&
            el.attributes.every((attr, i) => attr.value === mock.attributes[i].value)
          ) {
            mock.count++;
            self.splice(index, 1, mock);
          }
          return el 
        });
      }
      return newState;
    case CART_PRODUCT_ON_PLUS:
      return {
        ...state,
        purchases: [...state.purchases].map((el) => {
          if (
            el.id === action.product.id &&
            el.attributes.every((attr, i) => attr.value === action.product.attributes[i].value)
          ) {
            el = { ...el };
            el.count++;
          }
          return el;
        }),
      };
    case CART_PRODUCT_ON_MINUS:
      return {
        ...state,
        purchases: [...state.purchases].map((el) => {
          if (
            el.id === action.product.id &&
            el.attributes.every((attr, i) => attr.value === action.product.attributes[i].value)
          ) {
            el = { ...el };
            el.count--;
          }
          return el;
        }),
      };
    case REMOVE_PRODUCT_IN_CART:
      return {
        ...state,
        purchases: [...state.purchases].filter((el, i, self) => {
          if (
            el.id === action.product.id &&
            el.attributes.every((attr, i) => attr.value === action.product.attributes[i].value)
          ) {
            return false;
          } else {
            return true;
          }
        }),
      };
    case SET_ITEM_FROM_LOCAL_STORAGE:
      return {
        ...state,purchases:[...action.purchases]
      }
    default:
      return state;
  }
};

export default cart;

