import * as Types from '../actionTypes'

const initailState = {
  loading: false,
  currentUser: null,
  error: null,
}

const usersReducer = (state = initailState, action) => {
  switch (action.type) {
    case Types.SIGNUP_START:
    case Types.SIGNIN_START:
    case Types.LOGOUT_START:
    case Types.GOOGLE_OAUTH_START:
    case Types.FACEBOOK_OAUTH_START:
      return {
        ...state,
        loading: true,
      }
    case Types.SIGNUP_SUCCESS:
    case Types.SIGNIN_SUCCESS:
    case Types.GOOGLE_OAUTH_SUCCESS:
    case Types.FACEBOOK_OAUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
      }
    case Types.SET_USER:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
      }
    case Types.LOGOUT_SUCCESS:
      return initailState
    case Types.SIGNUP_ERROR:
    case Types.SIGNIN_ERROR:
    case Types.LOGOUT_ERROR:
    case Types.GOOGLE_OAUTH_ERROR:
    case Types.FACEBOOK_OAUTH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default usersReducer
