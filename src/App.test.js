import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

/*
 *  Factory function to create a ShallowWrapper for the App component.
 *  @function setup
 *  @param {object} props - Component props specific for his setup.
 *  @param {object} state - Initial state for setup.
 *  @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

/*
 * Return ShallowWrapper containing node(s) with the given data-test value
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test attribute for search.
 */
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

test('renders without errors', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});

test('renders header component', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-header');
  expect(appComponent.length).toBe(1);
});

test('InputCZK starts at 1', () => {
  const wrapper = setup();
  const initialInputState = wrapper.state('inputCZK');
  expect(initialInputState).toBe('1');
});
