<template>
  <section id="inspire">
    <v-navigation />

    <v-main class="bg">
      
        <router-view />
     
    </v-main>
  </section>
</template>

<script>
import VNavigation from "@/components/navigation/TheNavigation";

export default {
  name: "default-layout",

  components: {
    VNavigation,
  },
};
</script>

<style lang="scss" scoped>
.bg {
  width: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);

  position: relative;
}
</style>