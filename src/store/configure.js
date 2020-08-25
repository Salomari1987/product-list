import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './reducer'

const enhancers = [
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const configureStore = (initialState) => {
  const middleware = [
    thunk
  ]

  const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
  )

  const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers)

  return store
}

export default configureStore
