import React from 'react';
import { Redirect } from 'react-router-dom';
import Loading from './Loading';
import { createUser } from '../services/userAPI';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      buttonHabition: false,
      nameUser: '',
      loading: false,
      redirectLogin: false,
    };
  }

  handleChange = (login) => {
    const THREE = 3;
    const validation = login.length >= THREE;
    if (validation) {
      this.setState({
        buttonHabition: true,
      });
    }
    this.setState({
      nameUser: login,
    });
  }

  buttonClick = async () => {
    this.setState({
      loading: true,
    });
    const { nameUser } = this.state;
    await createUser({ name: nameUser });
    this.setState({
      loading: false,
      redirectLogin: true,
    });
  }

  submitClick = (event) => {
    event.preventDefault();
  }

  render() {
    const { buttonHabition, nameUser, loading, redirectLogin } = this.state;

    if (loading) {
      return <Loading />;
    }

    if (redirectLogin) {
      return <Redirect to="/search" />;
    }

    return (
      <div data-testid="page-login">
        <form onSubmit={ this.submitClick }>
          <label htmlFor="login">
            Nome:
            <input
              data-testid="login-name-input"
              type="text"
              name="nameUser"
              value={ nameUser }
              id="login"
              onChange={ ({ target }) => this.handleChange(target.value) }
            />
          </label>
          <button
            data-testid="login-submit-button"
            type="submit"
            disabled={ !buttonHabition }
            onClick={ this.buttonClick }
          >
            Entrar
          </button>
        </form>
      </div>

    );
  }
}

export default Login;
