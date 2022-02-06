import { SET_AUTH_DATA } from '../types/auth';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  saveMe: false,
  isAuth: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_DATA:
      return {
        ...state,
        ...action.authData,
        isAuth: action.authData ? true : false,
      };

    default:
      return state;
  }
};

export default auth;
