<template>
  <div class="q-pa-md q-gutter-sm">
    <q-banner rounded class="bg-purple-8 text-white">
      <h1>{{ pokemon.name }}</h1>
      <p><b>Experiência:</b> {{ pokemon.base_experience }}</p>
      <p><b>Altura:</b> {{ pokemon.height }}</p>
    </q-banner>
  </div>
</template>

<script>
import { defineComponent, reactive } from "vue";
import { useRoute } from "vue-router";
import apiPokemon from "../services/apiPokemon";

export default defineComponent({
  name: "PokemonPage",
  setup() {
    const route = useRoute();
    const id = route.params.id;
    const pokemon = reactive({});

    const getPokemon = async () => {
      try {
        const { data } = await apiPokemon.get(`/pokemon/${id}`);

        Object.assign(pokemon, data);
      } catch (error) {
        console.log(error);
      }
    };

    return { getPokemon, pokemon };
  },

  beforeMount() {
    this.getPokemon();
  },
});
</script>
