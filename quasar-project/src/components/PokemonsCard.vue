<template>
  <q-card
    dark
    bordered
    class="col-5 col-md-2 bg-grey-9 my-card q-mt-md q-mr-sm"
  >
    <q-card-section>
      <h2 class="text-h6 text-center">{{ index }}</h2>
      <h2 class="text-h6 text-center text-capitalize">{{ name }}</h2>
      <p>{{ $t("labelTipoPokemon") }}: {{ types }}</p>
    </q-card-section>

    <q-separator dark inset />

    <q-card-section class="flex flex-center">
      <q-btn
        @click="seeMore(index, name)"
        :label="$t('botaoVerMais')"
        glossy
        color="amber"
      />
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PokemonsCard",
  props: {
    index: Number,
    name: String,
    types: String,
  },

  methods: {
    seeMore(index, name) {
      this.$router.push({ path: `/${index}/${name}` });
    },
  },
});
</script>
