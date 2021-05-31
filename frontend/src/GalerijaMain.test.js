import App from './App';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup, screen } from '@testing-library/react';
import {shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// add custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect'
import GalerijaMain from './GalerijaMain';

configure({adapter: new Adapter()});
describe("<GalerijaMain/>", () => {
  // Testing render
  it("renders without crashing", () => {
    const wrapper = shallow(<GalerijaMain/>)
    expect(wrapper.length).toBe(1)
  })
  it("shows UploadForm", () => {
    const wrapper = shallow(<GalerijaMain/>)
    expect(wrapper.find('UploadForm').length).toBe(1)
  })
  it("shows ImageGrid", () => {
    const wrapper = shallow(<GalerijaMain/>)
    expect(wrapper.find('ImageGrid').length).toBe(1)
  })

  // it("shows Modal", () => {
  //   const wrapper = shallow(<GalerijaMain/>)
  //   expect(wrapper.find('Modal').length).toBe(1)
  // })

  //testing postNewComment
  // it("add a New Comment to state when postNewComment", () => {
  //   const wrapper = mount(<GalerijaMain/>)
  //   wrapper.instance().postNewComment({ comment: "test"})
  //   console.log(wrapper.instance().state)
  // })
});