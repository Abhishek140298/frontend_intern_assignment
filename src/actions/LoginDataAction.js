import {LoginCredentialData} from '../data/LoginCredentialData';

export const checkLoading = () => {
  return (dispatch) => {
    dispatch({ type: 'Loading' });
  };
};
export const getLoginCred = () => {
  return (dispatch) => {
    dispatch({ type: 'ON_SUCCESS_DATA', payload: LoginCredentialData });
  };
};
