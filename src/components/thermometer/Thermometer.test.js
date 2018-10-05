import Thermometer from './Thermometer';

it("renders correctly", () => {
  const wrapper = shallow(
    <Thermometer
      units="imperial"
      temp={70}
    />
  );

  expect(wrapper).toMatchSnapshot();
});

it("rounds the temperature", () => {
  const wrapper = shallow(
    <Thermometer
      units="imperial"
      temp={70.6}
    />
  );

  const text = wrapper.find(".thermometer__temp").text();

  expect(text).toEqual("71°");
});