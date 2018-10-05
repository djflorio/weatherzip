import Row from './Row';

const initProps = {
  units: "imperial",
  icon: "icon",
  time: "1776-07-04 12:00:00",
  weather: "Sunny",
  temp: 70
};

function setupShallow(props = initProps) {
  return shallow(<Row {...props} />);
}

it('renders correctly', () => {
  const wrapper = setupShallow();
  expect(wrapper).toMatchSnapshot();
});