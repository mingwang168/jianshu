import React, { Component } from "react";
import cookie from "react-cookies";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../../static/iconfont/iconfont.css";
import { CSSTransition } from "react-transition-group";
import {
  searchFocus,
  searchBlur,
  getList,
  mouseEnter,
  mouseLeave,
  changePage,
} from "./store/actionCreators";

import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList,
} from "./style.js";

class Header extends Component {
  constructor(props){
    super(props);

    try {this.loginFromCookie = JSON.parse(cookie.load("login"));}
    catch{
      this.props.updateLogin(false);
     // this.props.history.push("/login");
    }

  //  this.loginFromCookie = JSON.parse(cookie.load("login"));
    console.log(this.loginFromCookie);
    this.props.updateLogin(this.loginFromCookie);
  };

  render() {
    const {
      focused,
      list,
      handleInputFocus,
      handleInputBlur,
      totalPage,
      page,
      mouseIn,
      handleMouseEnter,
      handleMouseLeave,
      handleChangePage,
      loginStatus,
    } = this.props;
    const getPageList = () => {
      const newList = list.toJS();
      const pageList = [];
      if (newList.length) {
        for (let i = (page - 1) * 10; i < page * 10; i++) {
          pageList.push(
            <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
          );
        }
        return pageList;
      }
    };

    return (
      <div>
        <HeaderWrapper>
          <Link to="/">
            <Logo />
          </Link>
          <Nav>
            <NavItem className="left active">首页</NavItem>
            <NavItem className="left">下载App</NavItem>
            {loginStatus ? (
              <Link to="/">
                <NavItem className="right" onClick={this.props.quit}>
                  退出
                </NavItem>
              </Link>
            ) : (
              <Link to="/login">
                <NavItem className="right">登录</NavItem>
              </Link>
            )}
            <NavItem className="right">
              <i className="iconfont">&#xe603;</i>
            </NavItem>
            <SearchWrapper>
              <CSSTransition in={focused} timeout={200} classNames="slide">
                <NavSearch
                  className={focused ? "focused" : ""}
                  onFocus={() => handleInputFocus(list)}
                  onBlur={handleInputBlur}
                ></NavSearch>
              </CSSTransition>
              <i
                className={focused ? "focused iconfont zoom" : "iconfont zoom"}
              >
                &#xe602;
              </i>
              {(focused || mouseIn) && (
                <SearchInfo
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwitch
                      onClick={() =>
                        handleChangePage(page, totalPage, this.spinIcon)
                      }
                    >
                      <i
                        ref={(icon) => (this.spinIcon = icon)}
                        className="iconfont spin"
                      >
                        &#xe8e7;
                      </i>
                      换一批
                    </SearchInfoSwitch>
                  </SearchInfoTitle>
                  <SearchInfoList>{getPageList()}</SearchInfoList>
                </SearchInfo>
              )}
            </SearchWrapper>
          </Nav>
          <Addition>
            <Link to="/write">
              <Button className="writting">
                <i className="iconfont">&#xe6a6;</i>
                写文章
              </Button>
            </Link>
            <Button className="reg">注册</Button>
          </Addition>
        </HeaderWrapper>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      if (list.size === 0) {
        dispatch(getList());
      }
      dispatch(searchFocus());
    },
    handleInputBlur() {
      dispatch(searchBlur());
    },
    handleMouseEnter() {
      dispatch(mouseEnter());
    },
    handleMouseLeave() {
      dispatch(mouseLeave());
    },
    handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/gi, "");
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spin.style.transform = "rotate(" + (originAngle + 360) + "deg)";
      if (page < totalPage) {
        dispatch(changePage(page + 1));
      } else {
        dispatch(changePage(1));
      }
    },
    updateLogin(login) {
      dispatch({ type: "updateLogin", login });
    },
    quit() {
      dispatch({ type: "quit" });
    },
  };
};

export default connect(
  (state) => ({
    focused: state.get("header").get("focused"),
    list: state.getIn(["header", "list"]),
    totalPage: state.getIn(["header", "totalPage"]),
    page: state.getIn(["header", "page"]),
    mouseIn: state.getIn(["header", "mouseIn"]),
    loginStatus: state.getIn(["login", "login"]),
  }),
  mapDispatchToProps
)(Header);
