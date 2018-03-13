const defaultState = {
  appName: "Dugan Plumbing",
  FName: "",
  LName: "",
  email: "",
  message: "",
  AM: false,
  PM: false,
  phone: "",
  streetAddress: "",
  city: "",
  USstate: "",
  zip: "",
  validationStates: {
    FName: true,
    email: true,
    phone: true
  },
  WinWidth: null,
  SendFlag: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "APP_LOAD":
      return {
        ...state,
        appLoaded: true
      };
    case "CHANGE_FNAME":
      return {
        ...state,
        FName: action.payload
      };
    case "CHANGE_LNAME":
      return {
        ...state,
        LName: action.payload
      };
    case "CHANGE_EMAIL":
      return {
        ...state,
        email: action.payload
      };
    case "CHANGE_MESSAGE":
      return {
        ...state,
        message: action.payload
      };
    case "TOGGLE_AM":
      return {
        ...state,
        AM: !state.AM
      };
    case "TOGGLE_PM":
      return {
        ...state,
        PM: !state.PM
      };
    case "CHANGE_STREETADD":
      return {
        ...state,
        streetAddress: action.payload
      };
    case "CHANGE_CITY":
      return {
        ...state,
        city: action.payload
      };
    case "CHANGE_ZIP":
      return {
        ...state,
        zip: action.payload
      };
    case "CHANGE_PHONE":
      return {
        ...state,
        phone: action.payload
      };
    case "CHANGE_STATE":
      return {
        ...state,
        USstate: action.payload
      };
    case "CHANGE_VALIDATION_STATE":
      return {
        ...state,
        validationStates: {
          ...state.validationStates,
          [action.payload]: !state.validationStates[action.payload]
        }
      };
    case "SET_WIDTH":
      return {
        ...state,
        WinWidth: action.payload
      };
    case "TOGGLE_SEND_FLAG":
      return {
        ...state,
        SendFlag: !state.SendFlag
      };
    default:
      return state;
  }
};
