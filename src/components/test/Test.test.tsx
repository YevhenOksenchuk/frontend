import React from 'react';
import Test from './Test';
import { render } from '@testing-library/react';
import {Provider} from "react-redux";
import store from "../../store/index";
import {HashRouter as Router} from "react-router-dom";

describe('Test', () => {
  it('renders without error', () => {
    const { baseElement } = render(
<Provider store={store}><Router><Test /></Router></Provider>
);
    expect(baseElement).toBeDefined();
  });
});
