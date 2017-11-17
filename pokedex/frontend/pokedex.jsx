import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { Route } from 'react-router-dom';

import APIUtil from './util/api_util';
import { requestAPokemon, receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
import { selectPokemonItem, selectAllPokemon } from './reducers/selectors';

document.addEventListener('DOMContentLoaded', () => {
  window.requestAPokemon = requestAPokemon;
  // window.fetchAPokemon = APIUtil.fetchAPokemon;

  const store = configureStore();
  window.store = store;
  window.dispatch = store.dispatch;
  window.selectPokemonItem = selectPokemonItem;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
