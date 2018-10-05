import WeatherTable from './WeatherTable';

const initProps = {
  city: "New York",
  units: "imperial",
  data: [],
  onNewSearch: () => {}
};

function setupShallow(props = initProps) {
  return shallow(<WeatherTable {...props} />);
}

it("renders correctly", () => {
  const wrapper = setupShallow();
  expect(wrapper).toMatchSnapshot();
});

it("calls onNewSearch when new search is clicked", () => {
  const spy = sinon.spy();
  const props = {
    ...initProps,
    onNewSearch: spy
  };
  const wrapper = setupShallow(props);

  wrapper.find(".weather-table__new").simulate("click");

  expect(spy.calledOnce).toBe(true);
});

it("renders city name", () => {
  const props = {
    ...initProps,
    city: "Chicago"
  };
  const wrapper = setupShallow(props);

  const header = wrapper.find(".weather-table__header").text();

  expect(header).toContain("Chicago");
});