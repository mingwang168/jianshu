import React, { PureComponent } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { LoginWrapper, LoginBox, Input, Button } from "./style";
import axios from "axios";

class Login extends PureComponent {
  render() {
    if (!this.props.loginStatus) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder="帐号" ref={(input) => (this.account = input)} />
            <Input
              placeholder="密码"
              type="password"
              ref={(input) => (this.password = input)}
            />
            <Button
              onClick={() => this.props.login(this.account, this.password)}
            >
              登录
            </Button>
          </LoginBox>
        </LoginWrapper>
      );
    } else {
        return <Redirect to='/' />
    }
  }
}
const mapState = (state) => ({
  loginStatus: state.getIn(["login", "login"]),
});
const mapDispatch = (dispatch) => ({
  login: (account, password) => {
    axios
      .get("/api/login.json?account=" + account + "&password=" + password)
      .then((res) => {
        if (res.data.data) {
          dispatch({ type: "login", login: true });
        } else {
          alert("登录失败");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
});

export default connect(mapState, mapDispatch)(Login);
