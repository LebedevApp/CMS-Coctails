<template>
  <v-snackbar v-if="errors" :value="true" timeout="5000">
    {{ errors }}
    <template v-slot:action="{ attrs }">
      <v-btn color="red" text v-bind="attrs" @click="closeErrors">
        Закрыть
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: "snackbar-error",

  computed: {
    errors() {
      return this.$store.getters.get_errors;
    },
  },

  methods: {
    closeErrors() {
      this.$store.commit('clearErrors')
    }
  }
};
</script>