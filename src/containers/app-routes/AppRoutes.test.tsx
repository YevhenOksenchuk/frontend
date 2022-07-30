import React from 'react';
import AppRoutes from './AppRoutes';
import { render } from '@testing-library/react';
import {Provider} from "react-redux";
import store from "../../store/index";
import {HashRouter as Router} from "react-router-dom";

describe('AppRoutes', () => {
  it('renders without error', () => {
    const { baseElement } = render(
<Provider store={store}><Router><AppRoutes /></Router></Provider>
);
    expect(baseElement).toBeDefined();
  });
});
