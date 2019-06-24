import Dashboard from "../containers/Dashboard";

jest.mock("../Api");

it("calls google books api and renders them on  mount", done => {
  const wrapper = shallow(<Dashboard />);
  setTimeout(() => {
    wrapper();
    expect(wrapper.find("books").length).toEqual(1);
  });
  const state = wrapper.instance().state;
  expect(state.books.length).toEqual(1);
  expect(state.showBooks).toEqual(true);
  expect(state.errorMessages).toEqual(false);
  expect(state.query).toEqual("");

  done();
});
