import {
  EMPLOYEE_UPDATE
} from './types';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    parload: { prop, value }
  };
};
