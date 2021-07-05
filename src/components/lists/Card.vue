<template>
  <div>
    <v-divider></v-divider>
    <v-list-item link class="text-left" :to="'/ingredients/' + id">
      <v-avatar class="mr-2" color="orange" size="36">
        <span class="white--text text-h5">62</span>
      </v-avatar>
      <v-list-item-title>Абсолют Vanilla</v-list-item-title>
      <v-list-item-subtitle>Водка</v-list-item-subtitle>
      <v-list-item-subtitle>Россия</v-list-item-subtitle>
      <v-list-item-subtitle>40%</v-list-item-subtitle>
    </v-list-item>
  </div>
</template>

<script>
export default {
  name: 'id_page',

  props: {
    id: {
      type: Number
    }
  }
}
</script>