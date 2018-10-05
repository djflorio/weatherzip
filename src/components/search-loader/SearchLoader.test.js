import SearchLoader from './SearchLoader';

it("renders correctly", () => {
  const wrapper = shallow(
    <SearchLoader />
  );

  expect(wrapper).toMatchSnapshot();
});