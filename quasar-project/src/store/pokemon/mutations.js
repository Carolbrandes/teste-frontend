export function UPDATE_POKEMONS(state, payload) {
  state.pokemons = payload;
}

export function UPDATE_POKEMON_NAME(state, payload) {
  state.pokemonName = payload;
}

export function UPDATE_POKEMONS_TYPES(state, payload) {
  state.pokemonTypes = payload;
}

export function UPDATE_SELECTED_TYPE(state, payload) {
  state.pokemonSelectedType = payload;
}

export function UPDATE_LOADING(state, payload) {
  state.loading = payload;
}

export function UPDATE_NO_RESULTS(state, payload) {
  state.noResults = payload;
}
