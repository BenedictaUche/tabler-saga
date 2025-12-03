import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer, // redux store is created using this (includes the dashboard slice)
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

// middleware, so sagas can intercept actions
// rootSaga is started with the middleware to allow saga workers
// listen for actions

sagaMiddleware.run(rootSaga);


export type AppDispatch = typeof store.dispatch;

export default store;
