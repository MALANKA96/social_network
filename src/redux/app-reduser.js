import { getAuthData } from "./auth-reduser";

const INITILIZED_SUCCESS = "INITILIZED_SUCCESS";

let initialState = {
  initilized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITILIZED_SUCCESS:
      return {
        ...state,
        initilized: true,
      };
    default:
      return state;
  }
};

export const initilizedSuccess = () => ({
  type: INITILIZED_SUCCESS,
});

export const initilizeApp = () => {
  return (dispatch) => {
    let promise = dispatch(getAuthData());

    Promise.all([promise]).then(() => {
      dispatch(initilizedSuccess());
    });
  };
};

export default appReducer;
