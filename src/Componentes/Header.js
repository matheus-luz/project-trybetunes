import React from 'react';
import { getUser } from '../services/userAPI';
import Loading from './Loading';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      userLoading: true,
    };
  }

  componentDidMount() {
    this.handleUser();
  }

  handleUser = async () => {
    const usersGet = await getUser();
    this.setState({
      users: usersGet.name,
    });
    this.setState({
      userLoading: false,
    });
  }

  render() {
    const { users, userLoading } = this.state;

    if (userLoading) {
      return <Loading />;
    }

    return (
      <header data-testid="header-component">
        <h1 data-testid="header-user-name">{ users }</h1>
        <nav>
          <Link data-testid="link-to-search" to="/search">Search</Link>
          <Link data-testid="link-to-favorites" to="/favorites">Favorites</Link>
          <Link data-testid="link-to-profile" to="/profile">Profile</Link>
        </nav>
      </header>
    );
  }
}

export default Header;
