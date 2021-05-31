import React from 'react';
import {shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// add custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect'
import ProgressBar from './ProgressBar';

configure({adapter: new Adapter()});
describe("<ProgressBar/>", () => {
  // Testing render
  it("renders without crashing", () => {
    const wrapper = shallow(<ProgressBar/>)
    expect(wrapper.length).toBe(1)
  })
  it("should have .progress-bar class", () => {
    const wrapper = shallow(<ProgressBar/>)
    expect(wrapper.is('.progress-bar')).toBe(true)
  })
});