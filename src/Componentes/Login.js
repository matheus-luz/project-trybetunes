import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div data-testid="page-login">
        <form>
          <label htmlFor="login">
            Nome:
            <input
              type="text"
              id="login"
            />
          </label>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              id="email"
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              type="password"
              id="password"
            />
          </label>
        </form>
      </div>

    );
  }
}

export default Login;
