import { fromJS } from "immutable";
const defaultState = fromJS({
  writerList: [],
  page: 1,
  totalPage: 1,
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage:1,
  showScroll:false
});
const homeReducer = (state = defaultState, action) => {

  switch (action.type) {
    case "get_list":
      return state.merge({
        writerList: fromJS(action.data),
        totalPage: Math.ceil(action.data.length / 5),
      });
    case "change_page":
      return state.set("page", fromJS(action.data));
    case "set_homeList":
      return state.merge({
        topicList: fromJS(action.data.data.topicList),
        articleList: fromJS(action.data.data.articleList),
        recommendList: fromJS(action.data.data.recommendList),
      });
      case "get_moreList":
         return state.merge({
          articleList:state.get('articleList').concat(fromJS(action.data.data)),
          articlePage: fromJS(action.page)
        });
      case "toggle_goback":
         return state.set('showScroll',fromJS(action.data));
    default:
      return state;
  }
};
export default homeReducer;
