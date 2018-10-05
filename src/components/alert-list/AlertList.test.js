import AlertList from './AlertList';

it("renders correctly", () => {
  const wrapper = shallow(
    <AlertList
      alerts={[]}
      onRemove={() => {}}
    />
  );

  expect(wrapper).toMatchSnapshot();
});