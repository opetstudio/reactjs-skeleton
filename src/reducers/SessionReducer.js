const initialSession = {
  isLoggedIn: null
};
const INITIAL_STATE = {
  ...initialSession
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
