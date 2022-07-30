import React from 'react';
import Login from './Login';
import { render } from '@testing-library/react';
import {Provider} from "react-redux";
import store from "../../store/index";
import {HashRouter as Router} from "react-router-dom";

describe('Login', () => {
  it('renders without error', () => {
    const { baseElement } = render(
<Provider store={store}><Router><Login /></Router></Provider>
);
    expect(baseElement).toBeDefined();
  });
});
