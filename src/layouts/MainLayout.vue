<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <router-link class="text-white no-text-decoration" to="/"
            >Pokemon
          </router-link>
        </q-toolbar-title>

        <div class="col-2 q-py-sm">
          <q-select
            bg-color="warning"
            rounded
            outlined
            v-model="$i18n.locale"
            :options="options"
            :label="$t('labelIdioma')"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import { mapMutations, mapState } from "vuex";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "MainLayout",

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      options: ["pt", "en"],
    };
  },

  computed: {
    ...mapState("language", ["language"]),
  },
  methods: {
    ...mapMutations("language", ["UPDATE_LANGUAGE"]),
  },
  beforeMount() {
    this.locale = this.$q.lang.getLocale();
    this.UPDATE_LANGUAGE(this.$q.lang.getLocale());
  },
  watch: {
    locale() {
      this.UPDATE_LANGUAGE(this.locale);
    },
  },
});
</script>

<style lang="scss">
@import "../assets/global.scss";
</style>
