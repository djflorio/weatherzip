import WeatherTable from './WeatherTable';

it("renders correctly", () => {
  const wrapper = shallow(
    <WeatherTable
      city="New York"
      units="imperial"
      data={[]}
      onNewSearch={() => {}}
    />
  );

  expect(wrapper).toMatchSnapshot();
});

it("calls onNewSearch when new search is clicked", () => {
  const spy = sinon.spy();
  const wrapper = shallow(
    <WeatherTable
      city="New York"
      units="imperial"
      data={[]}
      onNewSearch={spy}
    />
  );

  wrapper.find(".weather-table__new").simulate("click");

  expect(spy.calledOnce).toBe(true);
});

it("renders city name", () => {
  const wrapper = shallow(
    <WeatherTable
      city="New York"
      units="imperial"
      data={[]}
      onNewSearch={() => {}}
    />
  );

  const header = wrapper.find(".weather-table__header").text();

  expect(header).toContain("New York");

});