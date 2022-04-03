<template>
  <div v-for="({ name, types }, index) in pokemonsGetter" :key="index">
    <pokemons-card
      :index="++index"
      :name="name"
      :types="arrayToString(types)"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapState, mapActions, mapGetters } from "vuex";
import PokemonsCard from "./PokemonsCard.vue";
import { myMixin } from "../mixins/index";

export default defineComponent({
  name: "PokemonsList",
  components: { PokemonsCard },
  mixins: [myMixin],
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
