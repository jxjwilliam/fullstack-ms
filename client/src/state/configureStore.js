import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './reducers'

const configureStore = (preState = {}) => {
  const middlewares = [createLogger(), thunk]
  const middlewareEnhancer = applyMiddleware(...middlewares)
  const enhancers = [middlewareEnhancer];
  let composedEnhancers = [];

  if (process.env.NODE_ENV === 'development') {
    composedEnhancers = composeWithDevTools(...enhancers)
  }
  else {
    composedEnhancers = compose(...enhancers)
  }
  const store = createStore(
    rootReducer,
    preState,
    composedEnhancers
  );

  return store;
}

export default configureStore