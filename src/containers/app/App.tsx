import React, { useEffect } from 'react';

import s from './App.module.scss';
import { AppRoutes } from "../index";
import { useNavigate } from "react-router-dom";

const App = () => {

  return (
    <>
      <AppRoutes />
    </>
  );
};

export default App;
