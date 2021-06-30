<template>
  <v-navigation-drawer app permanent class="pt-4" dark expand-on-hover>
      <v-divider></v-divider>
    <v-button-link :item="menu" />

    <div class="links mt-12">
      <v-divider></v-divider>
      <v-button-link v-for="(item, i) in links" :key="i" :item="item" />
    </div>

    <div class="mt-12">
      <v-divider></v-divider>
      <v-list-item link :href="github.to" color="light-green accent-3">
        <v-icon class="mr-3">{{github.icon}}</v-icon>
        <v-list-item-content>
          <v-list-item-title class="text-subtitle-2 font-weight-light">{{github.name}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
    </div>

    <v-button-link class="logout" :item="logout" />
  </v-navigation-drawer>
</template>

<script>
import VButtonLink from "@/components/navigation/ButtonLink";

export default {
  name: "navigation",

  components: {
    VButtonLink,
  },

  computed: {
    links() {
      return this.$store.getters.get_links;
    },
  },

  data() {
    return {
      logout: { name: "Выход", icon: "mdi-login-variant ", to: "/login" },
      menu: {
        name: "Настройки",
        icon: "mdi-menu",
        to: "/options",
      },
      github: {
        name: "GitHub",
        icon: "mdi-github ",
        to: "https://github.com/Podsida/CMS-Coctails.git",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.logout {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>