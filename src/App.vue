<template>
  <v-app>
    <component :is="layout">
      <router-view />
    </component>

    <v-error />
  </v-app>
</template>

<script>
import VError from "@/components/errors/TheError";

export default {
  name: "App",

  components: {
    VError,
  },

  computed: {
    layout() {
      return this.$route.meta.layout || "default-layout";
    },
  },
};
</script>
