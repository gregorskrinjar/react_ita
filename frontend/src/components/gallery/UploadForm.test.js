import React from 'react';
import {shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// add custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect'
import UploadForm from './UploadForm';

configure({adapter: new Adapter()});
describe("<UploadForm/>", () => {
  // Testing render
  it("renders without crashing", () => {
    const wrapper = shallow(<UploadForm/>)
    expect(wrapper.length).toBe(1)
  })
  it("shows form", () => {
    const wrapper = shallow(<UploadForm/>)
    expect(wrapper.find('form').length).toBe(1)
  })
  it("shows label", () => {
    const wrapper = shallow(<UploadForm/>)
    expect(wrapper.find('label').length).toBe(1)
  })
  it("shows input", () => {
    const wrapper = shallow(<UploadForm/>)
    expect(wrapper.find('input').length).toBe(1)
  })
  it("shows div", () => {
    const wrapper = shallow(<UploadForm/>)
    expect(wrapper.find('div').length).toBe(1)
  })
//   it("should have .output class", () => {
//     const wrapper = shallow(<UploadForm/>)
//     expect(wrapper.is('.output')).toBe(true)
//   })
//   it("should have .error class", () => {
//     const wrapper = shallow(<UploadForm/>)
//     expect(wrapper.is('.error')).toBe(true)
//   })
//   it("shows ProgressBar", () => {
//     const wrapper = shallow(<UploadForm/>)
//     expect(wrapper.find('ProgressBar').length).toBe(1)
//   })
});