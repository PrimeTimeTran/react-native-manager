import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
 } from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  loading: false,
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      // Create a new object with the properties of state. Create
      // a new property of email. If there is already an email, overwrite it.
      // This is how well tell Redux something has changed in the state.
      return { ...state, email: action.payload };

    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      return { ...state,
        ...INITIAL_STATE,
        user: action.payload
      };
    case LOGIN_USER_FAIL:
      return { ...state, loading: false, error: 'Authenticate Failed.', password: '' };
    default:
      return state;
  }
};
