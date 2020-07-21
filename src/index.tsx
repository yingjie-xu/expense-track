import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import storeConfig from './redux/StoreConfig';  
import * as serviceWorker from './serviceWorker';
import { addExpense } from './redux/ExpenseActions';

const store = storeConfig();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

store.dispatch(addExpense({description: "Gas Bill", note: "July", amount: 3000}))
store.dispatch(addExpense({description: "Water Bill", note: "July", amount: 3000}))
store.dispatch(addExpense({description: "Water Bill", note: "July", amount: 3000}))
store.dispatch(addExpense({description: "Water Bill", note: "July", amount: 3000}))
store.dispatch(addExpense({description: "Water Bill", note: "July", amount: 3000}))
store.dispatch(addExpense({description: "Water Bill", note: "July", amount: 3000}))
store.dispatch(addExpense({description: "Water Bill", note: "July", amount: 3000}))
store.dispatch(addExpense({description: "Water Bill", note: "July", amount: 3000}))
store.dispatch(addExpense({description: "Water Bill", note: "July", amount: 3000}))
store.dispatch(addExpense({description: "Water Bill", note: "July", amount: 3000}))
store.dispatch(addExpense({description: "Water Bill", note: "July", amount: 3000}))
store.dispatch(addExpense({description: "Water Bill", note: "July", amount: 3000}))
store.dispatch(addExpense({description: "Water Bill", note: "July", amount: 3000}))
store.dispatch(addExpense({description: "Water Bill", note: "July", amount: 3000}))
store.dispatch(addExpense({description: "Water Bill", note: "July", amount: 3000}))
console.log(store.getState())

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
