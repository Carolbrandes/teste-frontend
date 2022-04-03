<template>
  <pokemon-component />
</template>

<script>
import { defineComponent } from "vue";
import PokemonComponent from "../components/PokemonComponent.vue";

export default defineComponent({
  name: "PokemonPage",
  components: { PokemonComponent },
});
</script>
