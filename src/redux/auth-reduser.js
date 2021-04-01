import { stopSubmit } from "redux-form";
import { authAPI, captchaAPI } from "../api/api";

const SET_AUTH_USER_DATA = "samurai/auth/SET_AUTH_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "samurai/auth/GET_CAPTCHA_URL_SUCCESS";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
      case GET_CAPTCHA_URL_SUCCESS:
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
export const getCaptchaUrlSuccess = (captchaUrl) => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: {captchaUrl},
});

export const getAuthData = () => async (dispatch) => {
  let data = await authAPI.me();
  if (data.resultCode === 0) {
    let { id, email, login } = data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
  let data = await authAPI.login(email, password, rememberMe, captcha);
  
  if (data.resultCode === 0) {
    dispatch(getAuthData());
  }
  else {
    if (data.resultCode === 10) {
      dispatch(getCaptchaUrl())
    }
    dispatch(
      stopSubmit("login", {
        _error: data.messages[0]
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

export const getCaptchaUrl = () => async (dispatch) => {
  const data = await captchaAPI.captcha();
  const captchaUrl = data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));
};
export default authReducer;
