import React from 'react';
import ProtectedRoute from './ProtectedRoute';
import { render } from '@testing-library/react';
import {Provider} from "react-redux";
import store from "../../store/index";
import {HashRouter as Router} from "react-router-dom";

describe('ProtectedRoute', () => {
  it('renders without error', () => {
    const { baseElement } = render(
<Provider store={store}><Router><ProtectedRoute isAllowed={false} /></Router></Provider>
);
    expect(baseElement).toBeDefined();
  });
});
