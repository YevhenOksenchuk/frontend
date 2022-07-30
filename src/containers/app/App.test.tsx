import React from 'react';
import App from './App';
import { render } from '@testing-library/react';
import {Provider} from "react-redux";
import store from "../../store/index";
import {HashRouter as Router} from "react-router-dom";

describe('App', () => {
  it('renders without error', () => {
    const { baseElement } = render(
<Provider store={store}><Router><App /></Router></Provider>
);
    expect(baseElement).toBeDefined();
  });
});
