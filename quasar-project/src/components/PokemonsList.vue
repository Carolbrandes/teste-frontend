<template>
  <q-card
    v-for="(pokemon, index) in pokemonsGetter"
    :key="pokemon.name"
    dark
    bordered
    class="col-5 col-md-2 bg-grey-9 my-card q-mt-md q-mr-sm"
  >
    <q-card-section>
      <h2 class="text-h6 text-center">{{ ++index }}</h2>
      <h2 class="text-h6 text-center text-capitalize">{{ pokemon.name }}</h2>
    </q-card-section>

    <q-separator dark inset />

    <q-card-section class="flex flex-center">
      <q-btn
        @click="seeMore(index, pokemon.name)"
        label="Ver mais"
        glossy
        color="amber"
      />
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from "vue";
import { mapState, mapActions, mapGetters } from "vuex";

export default defineComponent({
  name: "PokemonsList",

  computed: {
    ...mapState("pokemon", ["pokemons"], "pokemon", ["pokemonName"]),
    ...mapGetters("pokemon", ["pokemonsGetter"]),
  },
  methods: {
    ...mapActions("pokemon", ["getPokemons"]),

    seeMore(index, name) {
      this.$router.push({ path: `/${index}/${name}` });
    },
  },

  beforeMount() {
    this.getPokemons();
  },
});
</script>
