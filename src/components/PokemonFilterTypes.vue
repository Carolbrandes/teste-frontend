<template>
  <div class="q-mt-sm col-10 col-md-3">
    <q-select
      rounded
      outlined
      v-model="type"
      :options="options"
      :label="$t('filtroTipos')"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import { mapState, mapMutations } from "vuex";

export default {
  setup() {
    return {
      type: ref(null),
      options: ref([]),
    };
  },
  computed: {
    ...mapState("pokemon", ["pokemonTypes"]),
  },
  methods: {
    ...mapMutations("pokemon", ["UPDATE_SELECTED_TYPE"]),
  },
  watch: {
    pokemonTypes() {
      this.options = [...this.pokemonTypes, "todos"];
    },
    type() {
      this.type !== "todos"
        ? this.UPDATE_SELECTED_TYPE(this.type)
        : this.UPDATE_SELECTED_TYPE("");
    },
  },
};
</script>
