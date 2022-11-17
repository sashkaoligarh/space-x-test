import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages';
const RootNavigator: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
};

export default RootNavigator;
