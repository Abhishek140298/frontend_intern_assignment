const INTIAL_STATE = {
  isLoading: false,
  loginCredentils: [],
};
export default function LoginDataReducer(state = INTIAL_STATE, action) {
  switch (action.type) {
    case 'Loading':
      return { ...state, isLoading: true  };
    case 'ON_SUCCESS_DATA':
     return {...state,isLoading:true,loginCredentils:action.payload}
    default:
      return { ...state };
  }
}
