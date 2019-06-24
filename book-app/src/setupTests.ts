import React from "react";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { createSerializer } from "enzyme-to-json";
import sinon from "sinon";

expect.addSnapshotSerializer(createSerializer({ modee: "deep" }));

Enzyme.configure({ adapter: new Adapter() });

global.react = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.sinon = sinon;
