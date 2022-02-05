import { SET_AUTH_DATA } from "../types/auth";


const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    saveMe: false,
    isAuth:false
  };
  
  const auth = (state = initialState, action) => {
    switch (action.type) {
      case SET_AUTH_DATA:
        return {
            ...state,
            firstName: action.authData?.firstName
            ,lastName:action.authData?.lastName
            ,email:action.authData?.email
            ,saveMe:action.authData?.saveMe
            ,isAuth:action.authData ? true : false
        };
     
      default:
        return state;
    }
  };
  
  export default auth;
  