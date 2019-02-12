import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import classNames from "classnames";
import NormalLoginForm from "../components/NormalLoginForm";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import { logIn, logOut } from "../../../store/global/actions";
import "antd/dist/antd.css";

const Search = Input.Search;

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}

  render() {
    const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
      NormalLoginForm
    );
    return (
      <WrappedNormalLoginForm
        loginIn={this.props.logIn}
        logOut={this.props.logOut}
      />
    );
  }
}

const mapStateToProps = state => ({
  loginUser: state.global.loginUser
});

const mapDispatchToProps = {
  logIn,
  logOut
};

LoginForm.propTypes = {};
LoginForm.defaultProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
