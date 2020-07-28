import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import storeConfig from './redux/StoreConfig';
import { startSetExpenses } from './redux/ExpenseActions';
import { Spin } from 'antd';


const store = storeConfig();

export const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(<div className="login-page"><Spin /></div>, document.getElementById('root'));

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(
    jsx,
    document.getElementById('root')
  );
});
