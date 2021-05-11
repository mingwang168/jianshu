import React, { PureComponent } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { ListItem, ListInfo, LoadMore } from "../style";

class List extends PureComponent {
  render() {
    const { getMoreList, page } = this.props;
    return (
      <div>
        {this.props.list.map((item, index) => {
          return (
             <Link key={index} to={'/detail/'+item.get('id')}> 
              <ListItem>
                <img className="pic" src={item.get("imgUrl")} alt="" />
                <ListInfo>
                  <h3 className="title">{item.get("title")}</h3>
                  <p className="desc">{item.get("desc")}</p>
                </ListInfo>
              </ListItem>
            </Link>
          );
        })}
        <LoadMore onClick={() => getMoreList(page)}>更多内容</LoadMore>
      </div>
    );
  }
}
const mapState = (state,ownProps) => ({
  list: state.get("home").get("articleList"),
  page: state.getIn(["home", "articlePage"])
});

const mapDispatch = (dispatch) => ({
  getMoreList: (page) => {
    axios
      .get("./api/homeList.json?page=" + page)
      .then((res) => {
        const data = res.data;
        dispatch({ type: "get_moreList", data: data, page: page + 1 });
      })
      .catch((err) => {
        console.log(err);
      });
  },
});
export default connect(mapState, mapDispatch)(List);
