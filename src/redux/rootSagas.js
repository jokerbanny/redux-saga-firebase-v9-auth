import { fork, all, takeEvery } from 'redux-saga/effects'
import * as Types from './actionTypes'
import {
  onSignupStartAsync,
  onSigninStartAsync,
  onLogoutStartAsync,
  onSetUserStartAsync,
  onGoogleOAuthStartAsync,
  onFacebookOAuthStartAsync,
} from './sagas/usersSaga'

function* onUsersSignup() {
  yield takeEvery(Types.SIGNUP_START, onSignupStartAsync)
}

function* onUsersSignin() {
  yield takeEvery(Types.SIGNIN_START, onSigninStartAsync)
}

function* onUsersLogout() {
  yield takeEvery(Types.LOGOUT_START, onLogoutStartAsync)
}

function* onSetUser() {
  yield takeEvery(Types.SET_USER_START, onSetUserStartAsync)
}

function* onGoogleOAuth() {
  yield takeEvery(Types.GOOGLE_OAUTH_START, onGoogleOAuthStartAsync)
}

function* onFacebookOAuth() {
  yield takeEvery(Types.FACEBOOK_OAUTH_START, onFacebookOAuthStartAsync)
}

const allSagas = [
  fork(onUsersSignup),
  fork(onUsersSignin),
  fork(onUsersLogout),
  fork(onSetUser),
  fork(onGoogleOAuth),
  fork(onFacebookOAuth),
]

export default function* rootSagas() {
  yield all([...allSagas])
}
