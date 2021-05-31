import React from "react";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";
import { createShallow } from "@material-ui/core/test-utils";
import ImageGrid from "./ImageGrid";

configure({ adapter: new Adapter() });
describe("<ImageGrid/>", () => {
  
  let shallow;

  beforeAll(() => {
    shallow = createShallow();
  });

  // Testing render
  it("renders without crashing", () => {
    const wrapper = shallow(<ImageGrid />);
    expect(wrapper.length).toBe(1);
  });
  // it("shows Grid", () => {
  //   const wrapper = shallow(<ImageGrid />);
  //   expect(wrapper.find("Grid").length).toBe(1);
  // });
  it("shows ImageCard", () => {
    const wrapper = shallow(<ImageGrid />);
    expect(wrapper.find("ImageCard").length).toBe(1);
  });
  // it("shows motion.div", () => {
  //   const wrapper = shallow(<ImageGrid/>)
  //   expect(wrapper.find('motion.div').length).toBe(1)
  // })
  // it("shows motion.img", () => {
  //   const wrapper = shallow(<ImageGrid/>)
  //   expect(wrapper.find('motion.img').length).toBe(1)
  // })
  // it("should have .img-wrap class", () => {
  //   const wrapper = shallow(<ImageGrid/>)
  //   expect(wrapper.is('.img-wrap')).toBe(true)
  // })
});
