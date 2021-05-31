import React from 'react';
import {shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// add custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect'
import Title from './Title';

configure({adapter: new Adapter()});
describe("<Title/>", () => {
  // Testing render
  it("renders without crashing", () => {
    const wrapper = shallow(<Title/>)
    expect(wrapper.length).toBe(1)
  })
  it("shows h1", () => {
    const wrapper = shallow(<Title/>)
    expect(wrapper.find('h1').length).toBe(1)
  })
  it("shows h2", () => {
    const wrapper = shallow(<Title/>)
    expect(wrapper.find('h2').length).toBe(1)
  })
  it("shows p", () => {
    const wrapper = shallow(<Title/>)
    expect(wrapper.find('p').length).toBe(1)
  })
  it("should have .progress-bar class", () => {
    const wrapper = shallow(<Title/>)
    expect(wrapper.is('.title')).toBe(true)
  })
});