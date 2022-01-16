import * as Types from '../actionTypes'

// User Sginup
export const signupStart = (user) => ({
  type: Types.SIGNUP_START,
  payload: user,
})

export const signupSuccess = (currentUser) => ({
  type: Types.SIGNUP_SUCCESS,
  payload: currentUser,
})

export const signupError = (error) => ({
  type: Types.SIGNUP_ERROR,
  payload: error,
})

// User Sginin
export const signinStart = (user) => ({
  type: Types.SIGNIN_START,
  payload: user,
})

export const signinSuccess = (currentUser) => ({
  type: Types.SIGNIN_SUCCESS,
  payload: currentUser,
})

export const signinError = (error) => ({
  type: Types.SIGNIN_ERROR,
  payload: error,
})

// User Sginin
export const logoutStart = () => ({
  type: Types.LOGOUT_START,
})

export const logoutSuccess = () => ({
  type: Types.LOGOUT_SUCCESS,
})

export const logoutError = (error) => ({
  type: Types.LOGOUT_ERROR,
  payload: error,
})

// Set User
export const setAuth = (authUser) => ({
  type: Types.SET_USER,
  payload: authUser,
})

// Set User Not Work Right Now
export const setUserStart = () => ({
  type: Types.SET_USER_START,
})

export const setUserSuccess = (user) => ({
  type: Types.SET_USER_SUCCESS,
  payload: user,
})

export const setUserError = (error) => ({
  type: Types.SET_USER_ERROR,
  payload: error,
})

// User SignUp & SignIn With GoogleAuth
export const googleOAuthStart = () => ({
  type: Types.GOOGLE_OAUTH_START,
})

export const googleOAuthSuccess = (res) => ({
  type: Types.GOOGLE_OAUTH_SUCCESS,
  payload: res,
})

export const googleOAuthError = (error) => ({
  type: Types.GOOGLE_OAUTH_ERROR,
  payload: error,
})
// User SignUp & SignIn With Facebook OAuth
export const facebookOAuthStart = () => ({
  type: Types.FACEBOOK_OAUTH_START,
})

export const facebookOAuthSuccess = (res) => ({
  type: Types.FACEBOOK_OAUTH_SUCCESS,
  payload: res,
})

export const facebookOAuthError = (error) => ({
  type: Types.FACEBOOK_OAUTH_ERROR,
  payload: error,
})
