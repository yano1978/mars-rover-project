import React from "react";
import { shallow } from "enzyme";
import Rover from './components/Rover';

describe("Rover", () => {
  let container

  beforeEach(() => (container = shallow(<Rover />)))

  it("should render a <span />", () => {
    expect(container.find("span").length).toBeGreaterThanOrEqual(1)
  })
})