import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Album from './Componentes/Album';
import Login from './Componentes/Login';
import Search from './Componentes/Search';
import Favorites from './Componentes/Favorites';
import Profile from './Componentes/Profile';
import NotFound from './Componentes/NotFound';
import ProfileEdit from './Componentes/ProfileEdit';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact component={ Login } />
        <Route path="/search" exact component={ Search } />
        <Route path="/Album/:id" exact component={ Album } />
        <Route path="/Favorites" exact component={ Favorites } />
        <Route path="/Profile/edit" exact component={ ProfileEdit } />
        <Route path="/Profile" exact component={ Profile } />
        <Route path="*" exact component={ NotFound } />
      </BrowserRouter>
    );
  }
}

export default App;
