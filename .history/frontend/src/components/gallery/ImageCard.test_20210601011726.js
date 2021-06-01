import React from "react";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";
import { createShallow, createMount  } from "@material-ui/core/test-utils";
import ImageCard from "./ImageCard";

configure({ adapter: new Adapter() });
describe("<ImageCard/>", () => {
  
  let shallow;
  let mount;

  beforeEach(() => {
    shallow = createShallow();
    mount = createMount();
  });
  afterEach(() => {
    mount.cleanUp();
  });

  // Testing render
  it("renders without crashing", () => {
    const wrapper = shallow(<ImageCard />);
    expect(wrapper.length).toBe(1);
  });
  it("shows div", () => {
    const wrapper = shallow(<ImageCard />);
    expect(wrapper.find("div").length).toBe(2);
  });
  // it("shows Grid", () => {
  //   const wrapper = mount(<ImageCard docs={true} />);
  //   expect(wrapper.find("Grid").length).toBe(1);
  // });
  // it("shows Card", () => {
  //   const wrapper = shallow(<ImageCard docs={true} />);
  //   expect(wrapper.find("Card").length).toBe(1);
  // });
  // it("shows CardHeader", () => {
  //   const wrapper = shallow(<ImageCard docs={true} />);
  //   expect(wrapper.find("CardHeader").length).toBe(1);
  // });
  // it("shows Avatar", () => {
  //   const wrapper = shallow(<ImageCard docs={true} />);
  //   expect(wrapper.find("Avatar").length).toBe(1);
  // });
  // it("shows CardMedia", () => {
  //   const wrapper = shallow(<ImageCard docs={true} />);
  //   expect(wrapper.find("CardMedia").length).toBe(1);
  // });
  // it("shows CardContent", () => {
  //   const wrapper = shallow(<ImageCard docs={true} />);
  //   expect(wrapper.find("CardContent").length).toBe(1);
  // });
  // it("shows Typography", () => {
  //   const wrapper = shallow(<ImageCard docs={true} />);
  //   expect(wrapper.find("Typography").length).toBe(1);
  // });
  // it("shows CardActions", () => {
  //   const wrapper = shallow(<ImageCard docs={true} />);
  //   expect(wrapper.find("CardActions").length).toBe(1);
  // });
  // it("shows IconButton", () => {
  //   const wrapper = shallow(<ImageCard docs={true} />);
  //   expect(wrapper.find("IconButton").length).toBe(1);
  // });
  // it("shows FavoriteIcon", () => {
  //   const wrapper = shallow(<ImageCard docs={true} />);
  //   expect(wrapper.find("FavoriteIcon").length).toBe(1);
  // });
  // it("shows ShareIcon", () => {
  //   const wrapper = shallow(<ImageCard docs={true} />);
  //   expect(wrapper.find("ShareIcon").length).toBe(1);
  // });
  // it("shows Card", () => {
  //   const wrapper = shallow(<ImageCard docs={true} />);
  //   expect(wrapper.find("Card").length).toBe(1);
  // });
  // it("shows Card", () => {
  //   const wrapper = shallow(<ImageCard docs={true} />);
  //   expect(wrapper.find("Card").length).toBe(1);
  // });
  // it("shows ExpandMoreIcon", () => {
  //   const wrapper = shallow(<ImageCard docs={true} />);
  //   expect(wrapper.find("ExpandMoreIcon").length).toBe(1);
  // });
  // it("shows Collapse", () => {
  //   const wrapper = shallow(<ImageCard docs={true} />);
  //   expect(wrapper.find("Collapse").length).toBe(1);
  // });
  // it("shows Commentar", () => {
  //   const wrapper = shallow(<ImageCard docs={true} />);
  //   expect(wrapper.find("Commentar").length).toBe(1);
  // });
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
