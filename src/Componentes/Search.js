import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Loading from './Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import MusicAlbum from './MusicAlbum';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      buttonForm: false,
      inputForm: '',
      album: [],
      error: '',
      loading: false,
      resultAlbum: '',
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

  handleClick = async () => {
    this.setState({
      loading: true,
    });
    const { inputForm } = this.state;
    const searchApi = await searchAlbumsAPI(inputForm);
    if (searchApi.length === 0) {
      this.setState({
        error: 'Nenhum álbum foi encontrado',
        loading: false,
        resultAlbum: `Resultado de álbuns de: ${inputForm}`,
        album: [],
        inputForm: '',
      });
    } else {
      this.setState({
        album: searchApi,
        loading: false,
        resultAlbum: `Resultado de álbuns de: ${inputForm}`,
        inputForm: '',
      });
    }
  }

  render() {
    const { buttonForm, inputForm, album, error, loading, resultAlbum } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <h1>Pesquisa</h1>
        <form>
          <label htmlFor="input-form">
            <input
              id="input-form"
              type="text"
              data-testid="search-artist-input"
              value={ inputForm }
              name="inputForm"
              placeholder="Nome do Artista"
              onChange={ ({ target }) => this.handleInput(target.value) }
            />
          </label>
          <button
            data-testid="search-artist-button"
            type="button"
            disabled={ !buttonForm }
            onClick={ this.handleClick }
          >
            Pesquisar
          </button>
        </form>
        { loading ? <Loading /> : '' }
        { resultAlbum }
        {
          album.length > 0
            ? album.map((music) => (
              <Link
                key={ music.collectionId }
                data-testid={ `link-to-album-${music.collectionId}` }
                to={ `/album/${music.collectionId}` }
              >
                <MusicAlbum
                  album={ music.collectionName }
                  key={ music.collectionId }
                />
              </Link>
            ))
            : <p>{ error }</p>
        }
      </div>
    );
  }
}

export default Search;
