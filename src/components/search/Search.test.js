import Search from './Search';

const initProps = {
  country: "US",
  zip: "10014",
  units: "imperial",
  onChange: () => {},
  onSubmit: () => {},
  onUnitChange: () => {}
};

function setupShallow(props = initProps) {
  return shallow(<Search {...props} />);
}

it("renders correctly", () => {
  const wrapper = setupShallow();
  expect(wrapper).toMatchSnapshot();
});

it("calls onChange when country changed", () => {
  const spy = sinon.spy();
  const props = {
    ...initProps,
    onChange: spy
  };
  const wrapper = setupShallow(props);

  wrapper
    .find(".search__country-select")
    .simulate("change");

  expect(spy.calledOnce).toBe(true);
});

it("calls onChange when zip changed", () => {
  const spy = sinon.spy();
  const props = {
    ...initProps,
    onChange: spy
  };
  const wrapper = setupShallow(props);

  wrapper
    .find(".search__zip")
    .simulate("change");

  expect(spy.calledOnce).toBe(true);
});

it("calls onSubmit when submitted", () => {
  const spy = sinon.spy();
  const props = {
    ...initProps,
    onSubmit: spy
  };
  const wrapper = setupShallow(props);

  wrapper
    .find(".search__form")
    .simulate("submit");

  expect(spy.calledOnce).toBe(true);
});