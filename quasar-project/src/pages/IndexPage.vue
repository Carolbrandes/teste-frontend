<template>
  <div>
    <pokemon-filter-name />
    <q-page
      class="row justify-center justify-md-evenly items-baseline wrap"
      style="min-height: auto"
    >
      <pokemons-list />
    </q-page>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import PokemonFilterName from "../components/PokemonFilterName.vue";
import PokemonsList from "../components/PokemonsList.vue";

export default defineComponent({
  name: "IndexPage",
  components: { PokemonsList, PokemonFilterName },
});
</script>
