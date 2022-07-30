import React from 'react';
import LayoutAdmin from './LayoutAdmin';
import { render } from '@testing-library/react';
import {Provider} from "react-redux";
import store from "../../store/index";
import {HashRouter as Router} from "react-router-dom";

describe('LayoutAdmin', () => {
  it('renders without error', () => {
    const { baseElement } = render(
<Provider store={store}><Router><LayoutAdmin  children={<>dfgdfg</>} /></Router></Provider>
);
    expect(baseElement).toBeDefined();
  });
});
