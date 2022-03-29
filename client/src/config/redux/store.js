import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'

import { itemsReducer } from "../../ecommerce/redux/items/reducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
  items: itemsReducer
})

export const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware( thunk )
  )
);