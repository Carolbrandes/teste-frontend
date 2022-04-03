<template>
  <div>
    <div class="q-my-md row wrap justify-center">
      <pokemon-filter-name />
      <pokemon-filter-types />
    </div>

    <q-page style="min-height: auto">
      <div
        v-if="!noResults"
        class="row justify-center justify-md-evenly items-baseline wrap"
      >
        <pokemons-list />
      </div>

      <div class="flex flex-center" v-if="loading">
        <q-circular-progress
          indeterminate
          size="50px"
          color="light-blue"
          class="q-ma-md"
        />
      </div>

      <div class="q-mt-md text-center" v-if="noResults">
        {{ $t("nenhumPokemonEncontrado") }}
      </div>
    </q-page>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters, mapMutations, mapState } from "vuex";
import PokemonFilterName from "../components/PokemonFilterName.vue";
import PokemonFilterTypes from "../components/PokemonFilterTypes.vue";
import PokemonsList from "../components/PokemonsList.vue";

export default defineComponent({
  name: "IndexPage",
  components: { PokemonsList, PokemonFilterName, PokemonFilterTypes },

  computed: {
    ...mapState("pokemon", ["loading", "noResults"]),
    ...mapGetters("pokemon", ["pokemonsGetter"]),
  },

  methods: {
    ...mapMutations("pokemon", ["UPDATE_NO_RESULTS"]),
  },

  watch: {
    pokemonsGetter() {
      if (this.pokemonsGetter.length === 0) this.UPDATE_NO_RESULTS(true);
    },
  },
});
</script>
