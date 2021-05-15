import { fromJS } from "immutable";
import cookie from 'react-cookies';

const defaultState = fromJS({
  login: false,
});

const loginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "login":
      let inFifteenMinutes = new Date(new Date().getTime() + 24*3600 * 1000);
      cookie.save('login',true,{path: '/', expires:inFifteenMinutes});
      return state.set('login',action.login);
    case "updateLogin":
      return state.set('login',action.login);
    case 'quit':
      cookie.save('login',false,{path: '/'});
      window.location.href = '/';
      return state.set("login", false);
    default:
      return state;
  }
};
export default loginReducer;
