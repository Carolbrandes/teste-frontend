<template>
  <div class="q-mr-sm col-10 col-md-3">
    <q-input rounded filled v-model="nameText" label="Nome do Pokemon" />
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
