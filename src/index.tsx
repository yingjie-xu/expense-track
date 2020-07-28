import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import storeConfig from './redux/StoreConfig';
import { startSetExpenses } from './redux/ExpenseActions';


const store = storeConfig();

export const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(<p>loading</p>, document.getElementById('root'));

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(
    jsx,
    document.getElementById('root')
  );
});
