import React from 'react';
import MainRoutes from './common/routes/MainRoutes';

import { Header } from './components/header/Header';

import './scss/app.scss';

export const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <MainRoutes />
    </div>
  );
};

export default App;
