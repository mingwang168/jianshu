import { fromJS } from "immutable";
const defaultState = fromJS({
  url:''
});
const writeReducer = (state = defaultState, action) => {

  switch (action.type) {
    case "save_pic":
      return state.set('url',action.url);
    default:
      return state;
  }
};
export default writeReducer;
