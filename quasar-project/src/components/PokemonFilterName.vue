<template>
  <div class="q-my-md row justify-center">
    <div class="col-10 col-md-4">
      <q-input rounded filled v-model="nameText" label="Nome do Pokemon" />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { mapState, mapMutations } from "vuex";

export default defineComponent({
  name: "PokemonFilterName",
  setup() {
    return {
      nameText: ref(""),
    };
  },
  computed: {
    ...mapState("pokemon", ["pokemonName"]),
  },
  methods: {
    ...mapMutations("pokemon", ["UPDATE_POKEMON_NAME"]),
  },
  watch: {
    nameText() {
      this.UPDATE_POKEMON_NAME(this.nameText);
    },
  },
});
</script>
