<template>
  <q-page class="flex flex-center">
    <pokemon-list />
  </q-page>
</template>

<script>
import { defineComponent, inject } from "vue";
import PokemonList from "../components/PokemonList.vue";
import {PokemonsUpdateSymbol} from "../components/ProvidePokemonSettings"
import apiPokemon from "../services/apiPokemon";

export default defineComponent({
  name: "IndexPage",
  components: { PokemonList },
  setup() {
    const updatePokemonSettings = inject(PokemonsUpdateSymbol);
    const updatePokemonList = (value) =>
      updatePokemonSettings("pokemonsList", value);
    return { updatePokemonList };
  },
  beforeMount() {
    apiPokemon
      .get("/pokemon")
      .then(({data}) => {

        updatePokemonList(data.results)
      })
      .catch((error) => {
        console.log("error api =>", error)
      });
  },
});
</script>
