import React from 'react';
import {shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// add custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect'
import Loader from './Loader';

configure({adapter: new Adapter()});
describe("<Loader/>", () => {
  // Testing render
  it("renders without crashing", () => {
    const wrapper = shallow(<Loader/>)
    expect(wrapper.length).toBe(1)
  })
});