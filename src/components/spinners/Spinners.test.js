import { HourGlass } from './Spinners';

it("renders correctly", () => {
  const wrapper = shallow(
    <HourGlass />
  );

  expect(wrapper).toMatchSnapshot();
});