import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';

import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button
        raised
        icon={{ name: 'cached' }}
        title='Login'
        onPress={() => this.onButtonPress()}
      />
    );
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      );
    }
  }

  render() {
    return (
      <View style={{ marginTop: 75 }}>
        <Card>
          <CardSection>
            <Input
              label="Email"
              placeholder="email@gmail.com"
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
            />
          </CardSection>

          <CardSection>
            <Input
              secureTextEntry
              label="Password"
              placeholder="password"
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
            />
          </CardSection>

          {this.renderError()}
          {/* <Text style={errorTextStyle}>
            {this.props.error}
          </Text> */}

          <CardSection>
            {this.renderButton()}
          </CardSection>
        </Card>
      </View>
    );
  }
}

const mapReduxStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

// Not using destructuring
// const mapReduxStateToProps = state => {
//   return {
//     email: state.auth.email,
//     password: state.auth.password,
//     error: state.auth.error
//   };
// };

const errorTextStyle = {
  fontSize: 20,
  alignSelf: 'center',
  color: 'red'
};

export default connect(mapReduxStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser })(LoginForm);
