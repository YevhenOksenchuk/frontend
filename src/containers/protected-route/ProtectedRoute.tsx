import React, { ReactElement } from 'react';

import s from './ProtectedRoute.module.scss';
import { Navigate, Outlet } from "react-router-dom";

interface Props {
  isAllowed: boolean;
  redirectPath?: string
  children?: ReactElement;
}

const ProtectedRoute = ({
                          isAllowed = false,
                          redirectPath = '/login',
                          children,
                        }: Props) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  if (children) {
    return children
  }


  return <Outlet/>
};

export default ProtectedRoute;
