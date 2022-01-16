import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducers from './rootReducers'
import rootSagas from './rootSagas'

export const sagaMiddleware = createSagaMiddleware()
export const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSagas)

export default store
