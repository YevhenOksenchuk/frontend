import React, { FC, ReactNode } from 'react';

import s from './LayoutAdmin.module.scss';

interface Props {
  children: ReactNode
}

const LayoutAdmin = ({
                       children
                     }: Props) => {
  return (
    <>
      <div>LayoutAdmin component</div>
      {children}
    </>
  );
};

export default LayoutAdmin;
