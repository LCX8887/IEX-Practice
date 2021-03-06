import React, { Component } from 'react';
import { connect } from 'react-redux';
import NormalLoginForm from '../components/NormalLoginForm';
import NormalLogoutForm from '../components/NormalLogoutForm';
import { logIn, logOut } from '../../../store/global/actions';
import { Form } from 'antd';
import 'antd/dist/antd.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}

  render() {
    const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(
      NormalLoginForm
    );

    const { loginUser, logIn, logOut } = this.props;

    return Object.keys(loginUser).length === 0 ? (
      <WrappedNormalLoginForm logIn={logIn} toggleSignIn={this.toggleSignIn} />
    ) : (
      <NormalLogoutForm loginUser={loginUser} logOut={logOut} />
    );
  }
}

const mapStateToProps = (state) => ({
  loginUser: state.global.loginUser,
  isUserExist: state.global.isUserExist,
});

const mapDispatchToProps = {
  logIn,
  logOut,
};

LoginForm.propTypes = {};
LoginForm.defaultProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
