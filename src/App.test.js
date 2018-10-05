import App from './App';

function setupShallow() {
  return shallow(<App />);
}

it('renders correctly', () => {
  const wrapper = setupShallow();
  expect(wrapper).toMatchSnapshot();
});

describe('setUnits', () => {
  it('sets units in App state', () => {
    const wrapper = setupShallow();
    wrapper.instance().setUnits("metric");
    expect(wrapper.state().units).toEqual("metric");
  });
});

describe('resetSearch', () => {
  it('resets the search in App state', () => {
    const wrapper = setupShallow();
    wrapper.instance().resetSearch();
    expect(wrapper.state()).toEqual(
      expect.objectContaining({
        fetching: false,
        data: []
      })
    );
  });
});

describe('removeAlert', () => {
  it('removes an alert from the App state', () => {
    const wrapper = setupShallow();
    wrapper.state().alerts = [
      { id: "1", message: "Test" },
      { id: "2", message: "Test" }
    ];
    wrapper.instance().removeAlert("2");
    expect(wrapper.state().alerts.length).toEqual(1);
  });
});

describe('addAlert', () => {
  it('adds an alert to the App state', () => {
    const wrapper = setupShallow();
    wrapper.instance().addAlert("Hello");
    const alerts = wrapper.state().alerts;
    expect(alerts.length).toEqual(1);
    expect(alerts[0]).toEqual({
      id: expect.anything(),
      message: "Hello"
    });
  });
});

/*describe('getWeather', () => {
  it('should add alert to state if no zip in state', () => {
    const wrapper = setupShallow();
    wrapper.state().zip = "";
    wrapper.instance().getWeather(wrapper.simulate("change"));
    expect(wrapper.state().alerts.length).toEqual(1);
  });
});*/