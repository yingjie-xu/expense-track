import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import expenseReducer from './reducers/ExpenseReducer';
import filterReducer from './reducers/FilterReducer';
import authReducer from './reducers/AuthReducer';
import thunk from 'redux-thunk';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(combineReducers({
    expenses: expenseReducer,
    filters: filterReducer,
    auth: authReducer
  }), composeEnhancers(applyMiddleware(thunk)));
  return store;
};