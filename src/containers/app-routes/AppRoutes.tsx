import React, { FC } from 'react';

import s from './AppRoutes.module.scss';
import { Route, Routes } from "react-router-dom";
import { Admin, Login } from "../../pages";
import { LayoutAdmin, ProtectedRoute } from "../index";
import { useAppSelector } from "../../hooks/hooks";
import { Roles } from "../../common/constants/roles";

const AppRoutes = () => {
  const role = useAppSelector(store => store.user?.role)

  return (
    <Routes>
      <Route index element={<Login/>}/>
      <Route path="login" element={<Login/>}/>

      {/*Role 1*/}
      <Route element={<ProtectedRoute isAllowed={Roles.ADMIN === role}/>}>
        <Route path='admin' element={<Admin />}/>
      </Route>

      {/*Role 2*/}
      <Route element={<ProtectedRoute isAllowed={Roles.TEACHER === role}/>}>

      </Route>

      {/*Role 3*/}
      <Route element={<ProtectedRoute isAllowed={Roles.STUDENT === role}/>}>

      </Route>
    </Routes>
  );
};

export default AppRoutes;
