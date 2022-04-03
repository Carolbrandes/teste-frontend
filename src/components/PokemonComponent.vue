<template>
  <div class="q-pa-md q-gutter-sm">
    <q-banner rounded class="bg-purple-8 text-white">
      <h1>{{ pokemon.name }}</h1>
      <p>{{ $t("labelExperiencia") }}: {{ pokemon.base_experience }}</p>
      <p>
        <b>{{ $t("labelTipoPokemon") }}:</b>{{ arrayToString(pokemon.types) }}
      </p>
      <p>
        <b>{{ $t("labelPeso") }}:</b> {{ parseWeightKg(pokemon.weight) }}kg
      </p>
      <p>
        <b>{{ $t("labelAltura") }}:</b> {{ parseHeightM(pokemon.height) }}m
      </p>
    </q-banner>
  </div>
</template>

<script>
import { defineComponent, reactive } from "vue";
import { useRoute } from "vue-router";
import apiPokemon from "../services/apiPokemon";
import { myMixin } from "../mixins/index";
import { mapState, mapMutations } from "vuex";

export default defineComponent({
  name: "PokemonComponent",
  mixins: [myMixin],
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

    const parseWeightKg = (weight) =>
      (weight / 2.2).toFixed(2).replace(".", ",");

    const parseHeightM = (height) =>
      (height * 0.3048).toFixed(2).replace(".", ",");

    return { getPokemon, pokemon, parseWeightKg, parseHeightM, id };
  },
  computed: {
    ...mapState("pokemon", ["loading"]),
  },

  methods: {
    ...mapMutations("pokemon", ["UPDATE_LOADING"]),
  },

  beforeMount() {
    this.getPokemon();
  },
});
</script>
