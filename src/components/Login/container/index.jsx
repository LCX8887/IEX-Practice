import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import NormalLoginForm from '../components/NormalLoginForm';
import NormalLogoutForm from '../components/NormalLogoutForm';
import RegistrationForm from '../components/RegistrationForm';
import { logIn, logOut, registration } from '../../../store/global/actions';
import { Form } from 'antd';

import 'antd/dist/antd.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { signIn: false };
  }
  componentDidMount() {}

  toggleSignIn = () => {
    this.setState((prevState) => {
      return { signIn: !prevState.signIn };
    });
  };
  render() {
    const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(
      NormalLoginForm
    );
    const WrappedRegistrationForm = Form.create({ name: 'register' })(
      RegistrationForm
    );

    const { loginUser, logIn, logOut, registration } = this.props;
    const { signIn } = this.state;
    return signIn ? (
      <WrappedRegistrationForm
        registration={registration}
        toggleSignIn={this.toggleSignIn}
      />
    ) : Object.keys(loginUser).length === 0 ? (
      <WrappedNormalLoginForm logIn={logIn} toggleSignIn={this.toggleSignIn} />
    ) : (
      <NormalLogoutForm loginUser={loginUser} logOut={logOut} />
    );
  }
}

const mapStateToProps = (state) => ({
  loginUser: state.global.loginUser,
});

const mapDispatchToProps = {
  logIn,
  logOut,
  registration,
};

LoginForm.propTypes = {};
LoginForm.defaultProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
