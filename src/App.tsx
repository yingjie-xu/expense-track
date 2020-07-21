import React, { FC } from 'react';
import './App.less';
import AppRouter from './router/AppRouter';

const App: FC = () => (
  <div className="App">
    <AppRouter />
  </div>
);

export default App;