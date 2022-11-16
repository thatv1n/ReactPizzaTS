import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../../components/notFound/NotFound';
import { Cart } from '../../pages/Cart';
import { Home } from '../../pages/Home';

const MainRoutes: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="ReactPizzaTS/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
