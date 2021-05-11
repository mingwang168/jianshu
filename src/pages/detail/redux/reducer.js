import { fromJS } from "immutable";


const defaultState = fromJS({
  title: '',
  content: ''
});
const detailReducer = (state = defaultState, action) => {

  switch (action.type) {
    case "getDetail":
      return state.merge({
          title: action.data.title,
          content:action.data.content
      });
    default:
      return state;
  }
};
export default detailReducer;
