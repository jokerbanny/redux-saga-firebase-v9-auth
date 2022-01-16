import { put, call } from 'redux-saga/effects'
import {
  usersSignupApi,
  usersSigninApi,
  usersLogoutApi,
  setUserApi,
  googleOAuthApi,
  facebookOAuthApi,
} from './../../utils/api'
import {
  signupSuccess,
  signupError,
  signinSuccess,
  signinError,
  logoutSuccess,
  logoutError,
  setUserSuccess,
  setUserError,
  googleOAuthSuccess,
  googleOAuthError,
  facebookOAuthSuccess,
  facebookOAuthError,
} from '../actions/usersAction'

export function* onSignupStartAsync({ payload: { name, email, password } }) {
  try {
    const currentUser = yield call(usersSignupApi, name, email, password)
    yield put(signupSuccess(currentUser))
  } catch (error) {
    yield put(signupError(error))
  }
}

export function* onSigninStartAsync({ payload: { email, password } }) {
  try {
    const currentUser = yield call(usersSigninApi, email, password)
    yield put(signinSuccess(currentUser))
  } catch (error) {
    yield put(signinError(error))
  }
}

export function* onLogoutStartAsync() {
  try {
    yield call(usersLogoutApi)
    yield put(logoutSuccess())
  } catch (error) {
    yield put(logoutError(error))
  }
}

// Set User
export function* onSetUserStartAsync() {
  try {
    const currentUser = yield call(setUserApi)
    console.log(currentUser)
    yield put(setUserSuccess(currentUser))
  } catch (error) {
    yield put(setUserError())
  }
}

// User Signup & Signin With Google Oauth
export function* onGoogleOAuthStartAsync() {
  try {
    const res = yield call(googleOAuthApi)
    yield put(googleOAuthSuccess(res))
  } catch (error) {
    yield put(googleOAuthError(error))
  }
}

// User Signup & Signin With Facebook Oauth
export function* onFacebookOAuthStartAsync() {
  try {
    const res = yield call(facebookOAuthApi)
    yield put(facebookOAuthSuccess(res))
  } catch (error) {
    yield put(facebookOAuthError(error))
  }
}
