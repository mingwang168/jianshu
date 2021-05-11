import axios from "axios";
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import {
  WriterWrapper,
  WriterTitle,
  WriterSwitch,
  WriterList,
  WriterInfo,
} from "../style.js";
class Writer extends PureComponent {
  componentDidMount() {
    this.props.getWriterList();
  }
  render() {
    const { handleChangePage, page, totalPage, writerList } = this.props;

    const getPageList = () => {
      const newList = writerList.toJS();
      const pageList = [];
      if (newList.length) {
        for (let i = (page - 1) * 5; i < page * 5; i++) {
          pageList.push(
            <WriterList key={newList[i].id}>
              <img className="writerIcon" src={newList[i].imgUrl} alt="" />
              <WriterInfo>
                <p className="writerName">{newList[i].writerName}</p>
                <span className="wordNumber">
                  写了{newList[i].wordNumber / 1000}K字&nbsp;&bull;&nbsp;
                  {newList[i].like / 1000}K喜欢
                </span>
              </WriterInfo>
              <span className="focus">
                <span>+</span>关注
              </span>
            </WriterList>
          );
        }
        return pageList;
      }
    };

    return (
      <div>
        <WriterWrapper>
          <WriterTitle>
            推荐作者
            <WriterSwitch
              onClick={() => handleChangePage(page, totalPage, this.spinIcon)}
            >
              <i
                ref={(icon) => (this.spinIcon = icon)}
                className="iconfont spin"
              >
                &#xe8e7;
              </i>
              换一批
            </WriterSwitch>
          </WriterTitle>
          {getPageList()}
        </WriterWrapper>
      </div>
    );
  }
}
const mapState = (state) => ({
  page: state.getIn(["home", "page"]),
  totalPage: state.getIn(["home", "totalPage"]),
  writerList: state.get("home").get("writerList"),
});
const mapDispatch = (dispatch) => {
  return {
    getWriterList() {
      axios
        .get("/api/writerList.json")
        .then((res) => {
          const { data } = res.data;
          dispatch({ type: "get_list", data });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleChangePage(page, totalPage, spin) {
      console.log(spin.style.transform);
      let originAngle = spin.style.transform.replace(/[^0-9]/gi, "");
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spin.style.transform = "rotate(" + (originAngle + 360) + "deg)";
      if (page < totalPage) {
        dispatch({ type: "change_page", data: page + 1 });
      } else {
        dispatch({ type: "change_page", data: 1 });
      }
    },
  };
};
export default connect(mapState, mapDispatch)(Writer);
