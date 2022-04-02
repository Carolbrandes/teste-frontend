export function pokemonsGetter(state) {
  return state.pokemonName
    ? state.pokemons.filter(({ name }) => name.includes(state.pokemonName))
    : state.pokemons;
}
