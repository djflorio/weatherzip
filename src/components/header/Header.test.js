import Header from './Header';

it("renders correctly", () => {
  const wrapper = shallow(
    <Header />
  );

  expect(wrapper).toMatchSnapshot();
});