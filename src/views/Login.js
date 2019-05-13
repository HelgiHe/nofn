import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../components/input';
import {
  emailChanged,
  passwordChanged,
  passwordRepeatChanged
} from '../actions';

import './Login.scss';

class Login extends Component {
  state = { formType: 'old' };

  setFormType(formType) {
    this.setState({ formType });
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChanged(text) {
    this.props.passwordChanged(text);
  }

  onPasswordRepeatChanged(text) {
    this.props.passwordRepeatChanged(text);
  }

  render() {
    const { email, password, repeatPassword } = this.props;
    const { formType } = this.state;

    return (
      <div className="LoginContainer">
        <div className="formTypeContainer">
          <p
            onClick={this.setFormType.bind(this, 'old')}
            style={formType === 'old' ? { fontWeight: 700 } : {}}
          >
            Innskráning
          </p>{' '}
          /{' '}
          <p
            onClick={this.setFormType.bind(this, 'new')}
            style={formType === 'new' ? { fontWeight: 700 } : {}}
          >
            Nýskráning
          </p>
        </div>
        <form>
          <Input
            label="Netfang"
            value={email}
            handleChange={this.onEmailChange.bind(this)}
          />
          <Input
            label="Lykilorð"
            value={password}
            handleChange={this.onPasswordChanged.bind(this)}
          />
          {formType === 'new' && (
            <Input
              label="Lykilorð endurtekið"
              value={repeatPassword}
              handleChange={this.onPasswordRepeatChanged.bind(this)}
            />
          )}
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, repeatPassword } = auth;

  return { email, password, repeatPassword };
};

export default connect(
  mapStateToProps,
  { emailChanged, passwordChanged, passwordRepeatChanged }
)(Login);
