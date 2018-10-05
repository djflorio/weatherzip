import Alert from './Alert';

const initProps = {
  alert: {
    id: "1",
    message: "Test"
  },
  onRemove: () => {}
};

function setupShallow(props = initProps) {
  return shallow(<Alert {...props} />);
}

it("renders correctly", () => {
  const wrapper = setupShallow();
  expect(wrapper).toMatchSnapshot();
});

it("calls onRemove when alert clicked", () => {
  const spy = sinon.spy();
  const props = {
    ...initProps,
    onRemove: spy
  };
  const wrapper = setupShallow(props);

  wrapper.find(".alert").simulate("click");

  expect(spy.calledOnce).toBe(true);
});