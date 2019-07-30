const initialState = {
  userData: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOGIN_SUCCESS": {
      return { userData: action.userData };
    }
    case "USER_AUTHORIZED": {
      return { userData: action.currentUser };
    }
    default: {
      return state;
    }
  }
}
