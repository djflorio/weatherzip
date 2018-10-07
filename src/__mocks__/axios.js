export default {
  get: jest.fn(() => Promise.resolve({
    data: {
      city: {
        name: "New York"
      },
      list: ["test"]
    }
  }))
};