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

<style lang="scss" scoped>
::-webkit-scrollbar-button {
  width: 5px;
  height: 0px;
}
::-webkit-scrollbar-track {
  background-color: rgba(0, 0, 0, 0);
}

::-webkit-scrollbar-thumb {
  -webkit-border-radius: 50px;
  border-radius: 50px;
  background-color: rgba(0, 0, 0, 0.3);
}

::-webkit-scrollbar-thumb:hover {
  background-color: rgba(0, 0, 0, 0.6);
}

::-webkit-resizer {
  width: 4px;
  height: 0px;
}

::-webkit-scrollbar {
  width: 4px;
}

</style>
