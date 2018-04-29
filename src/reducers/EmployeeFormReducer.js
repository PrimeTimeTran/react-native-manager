import {
  EMPLOYEE_UPDATE
} from '../actions/types';

const INITITAL_STATE = {
  name: null,
  phone: null,
  shift: null
};

export default (state = INITITAL_STATE, action) => {
  switch (action.typ) {
    case EMPLOYEE_UPDATE:
      // action.payload === { prop: 'name', value: 'jane'}
      // Key interpolation in brackets
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
