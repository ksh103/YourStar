import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './modules/index';
import rootSaga from './sagas/index';
import createSagaMiddlware from 'redux-saga';
export default function configureStore() {
  const sagaMiddleware = createSagaMiddlware();
  const middlewares = [sagaMiddleware];
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
