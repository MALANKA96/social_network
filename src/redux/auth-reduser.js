import { stopSubmit } from "redux-form";
import { authAPI, captchaAPI } from "../api/api";

const SET_AUTH_USER_DATA = "samurai/auth/SET_AUTH_USER_DATA";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_AUTH_USER_DATA,
  payload: { userId, email, login, isAuth },
});

export const getAuthData = () => async (dispatch) => {
  let data = await authAPI.me();
  if (data.resultCode === 0) {
    let { id, email, login } = data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const login = (email, password, rememberMe) => async (dispatch) => {
  let data = await authAPI.login(email, password, rememberMe);
  if (data.resultCode === 0) {
    dispatch(getAuthData());
  } else {
    const message = data.messages.length > 0 ? data.messages[0] : "АААшибка";
    dispatch(
      stopSubmit("login", {
        _error: message,
      })
    );
  }
};
export const logout = () => async (dispatch) => {
  let data = await authAPI.logout();
  if (data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export const captcha = () => async (dispatch) => {
  let data = await captchaAPI.captcha();
  dispatch();
};
export default authReducer;
