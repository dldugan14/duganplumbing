const defaultState = {
  appName: "Dugan Plumbing"
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "APP_LOAD":
      return {
        ...state,
        appLoaded: true
      };
    default:
      return state;
  }
};
