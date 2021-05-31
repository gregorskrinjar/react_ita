import React from 'react';
import {shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// add custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect'
import Modal from './Modal';

//configure({adapter: new Adapter()});
// describe("<Modal/>", () => {
  // Testing render
  // it("renders without crashing", () => {
  //   const wrapper = shallow(<Modal/>)
  //   expect(wrapper.length).toBe(1)
  // })
  // it("shows Background", () => {
  //   const wrapper = shallow(<Modal/>)
  //   expect(wrapper.find('Background').length).toBe(1)
  // })
  // it("shows ModalWrapper", () => {
  //   const wrapper = shallow(<Modal/>)
  //   expect(wrapper.find('ModalWrapper').length).toBe(1)
  // })
  // it("shows ModalImg", () => {
  //   const wrapper = shallow(<Modal/>)
  //   expect(wrapper.find('ModalImg').length).toBe(1)
  // })
  // it("shows ModalContent", () => {
  //   const wrapper = shallow(<Modal/>)
  //   expect(wrapper.find('ModalContent').length).toBe(1)
  // })
  // it("shows Commentar", () => {
  //   const wrapper = shallow(<Modal/>)
  //   expect(wrapper.find('Commentar').length).toBe(1)
  // })
  // it("shows CloseModalButton", () => {
  //   const wrapper = shallow(<Modal/>)
  //   expect(wrapper.find('CloseModalButton').length).toBe(1)
  // })
// });