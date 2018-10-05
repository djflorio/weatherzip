import UnitPicker from './UnitPicker';

it("renders correctly with imperial", () => {
  const wrapper = shallow(
    <UnitPicker
      units="imperial"
      onChange={() => {}}
    />
  );

  expect(wrapper).toMatchSnapshot();
});

it("renders correctly with metric", () => {
  const wrapper = shallow(
    <UnitPicker
      units="metric"
      onChange={() => {}}
    />
  );

  expect(wrapper).toMatchSnapshot();
});

it("calls onChange with correct value", () => {
  const spy = sinon.spy();
  const wrapper = mount(
    <UnitPicker
      units="imperial"
      onChange={spy}
    />
  );

  wrapper
    .find(".unit-picker__choice")
    .first()
    .simulate("click");

  expect(spy.calledWith("imperial"));

  wrapper
    .find(".unit-picker__choice")
    .at(1)
    .simulate("click");

  expect(spy.calledWith("metric"));
});