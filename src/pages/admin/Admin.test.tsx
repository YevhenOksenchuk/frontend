import React from 'react';
import Admin from './Admin';
import { render } from '@testing-library/react';
import {Provider} from "react-redux";
import store from "../../store/index";
import {HashRouter as Router} from "react-router-dom";

describe('Admin', () => {
  it('renders without error', () => {
    const { baseElement } = render(
<Provider store={store}><Router><Admin /></Router></Provider>
);
    expect(baseElement).toBeDefined();
  });
});
