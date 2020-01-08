import { createStore, applyMiddleware, compose } from "redux";
import logger from 'redux-logger';
import { persistStore } from 'redux-persist'
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import createSagaMiddleware from 'redux-saga'
import rootSagas from './redux/root.saga'

const sagaMiddleWare = createSagaMiddleware()

const initialState = {};

const middlewares = [thunk,sagaMiddleWare];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger)
}

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares),
    (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) ||
      compose
  )
);

sagaMiddleWare.run(rootSagas);
export const persistor = persistStore(store);

export default { store, persistStore }


// import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
// import rootReducer from "./reducers";

// const initialState = {};

// const middleware = [thunk];

// const store = createStore(
//   rootReducer,
//   initialState,
//   compose(
//     applyMiddleware(...middleware),
//     (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
//       window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) ||
//       compose
//   )
// );

// export default store;
