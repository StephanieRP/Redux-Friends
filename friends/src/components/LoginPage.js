import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../actions/login";
class LoginPage extends Component {
  state = {
    loginInfo: {
      username: "",
      password: ""
    }
  };

  changeHandler = e => {
    console.log(e);
    this.setState({
      loginInfo: {
        ...this.state.loginInfo,
        [e.target.name]: e.target.value
      }
    });
  };

  loginHandler = e => {
    e.preventDefault();
    this.props.login(this.state.loginInfo).then(() => {
      this.props.history.push("/friends-home");
    });
  };
  render() {
    return (
      <div className="login-page">
        <form onSubmit={this.loginHandler}>
          <h3> Friends App </h3>

          <div>
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={this.state.loginInfo.username}
              onChange={this.changeHandler}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.loginInfo.password}
              onChange={this.changeHandler}
            />
          </div>
          <button type="submit"> Log In</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ loggingIn, error }) => ({
  error,
  loggingIn
});

export default connect(
  mapStateToProps,
  { login }
)(LoginPage);
