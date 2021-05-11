import { fromJS } from "immutable";

const defaultState = fromJS({
  login: false,
});

const loginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "login":
      return state.set('login',action.login);
    case 'quit':
        console.log('qq');
      return state.set("login", false);
    default:
      return state;
  }
};
export default loginReducer;
