import { SET_CURRENT_USER, USER_LOADING,GET_ERRORS, GET_USERS } from "../constants/ActionTypes";

const isEmpty = require('is-empty');

const initialState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  errorText: '',
  users:[]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case USER_LOADING:
      return {
        ...state,
        loading: true
      };
      case GET_ERRORS:
      return {
        ...state,
        errorText: action.payload
      };
      case GET_USERS:
        return {
          ...state,
        users: action.payload
        };
    default:
      return state;
  }
}
