import React from 'react';
import Header from './Header';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      buttonForm: false,
      inputForm: '',
    };
  }

  handleInput = (inputName) => {
    const TWO = 2;
    const validation = inputName.length >= TWO;
    if (validation) {
      this.setState({
        buttonForm: true,
      });
    }
    this.setState({
      inputForm: inputName,
    });
  }

  render() {
    const { buttonForm, inputForm } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <h1>Hello Word</h1>
        <form>
          <label htmlFor="input-form">
            <input
              id="input-form"
              type="text"
              data-testid="search-artist-input"
              value={ inputForm }
              name="inputForm"
              onChange={ ({ target }) => this.handleInput(target.value) }
            />
          </label>
          <button
            data-testid="search-artist-button"
            type="button"
            disabled={ !buttonForm }
          >
            Pesquisar
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
