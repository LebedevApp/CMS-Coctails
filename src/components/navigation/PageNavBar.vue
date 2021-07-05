<template>
  <v-card width="100%" dark color="rgba(0,0,0,0.6)">
    <div class="d-flex flex-wrap flex-md-nowrap justify-space-between align-center mx-3">
      <div class="order-1 order-lg-0">
        <v-btn small outlined dark fab>
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </div>
      <div class="mx-0 mx-md-4 mt-2" style="width: 100%">
        <v-text-field
          label="Solo"
          prepend-inner-icon="mdi-magnify"
          color="green"
          solo
          dense
          light
        ></v-text-field>
        <div class="d-flex justify-start align-center mx-0 mx-md-3 mt-n5 mb-1">
          <v-chip class="mx-2" link outlined>tags</v-chip>
          <v-chip class="mx-2" link outlined>tags</v-chip>
          <v-chip class="mx-2" link outlined>tags</v-chip>
        </div>
      </div>

      <div class="d-flex">
        <v-checkbox
          class="mx-3"
          color="rgba(255,255,255,0.8)"
          off-icon="mdi-sort-descending "
          on-icon="mdi-sort-ascending"
          v-model="alphabet"
        ></v-checkbox>
        <v-checkbox
          class="mx-3"
          color="rgba(255,255,255,0.8)"
          off-icon="mdi-sort-calendar-descending  "
          on-icon="mdi-sort-calendar-ascending"
          v-model="time"
        ></v-checkbox>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  watch: {
    sort() {
      console.log(this.sort);
    },
  },
  data() {
    return {
      alphabet: false,
      time: false,
    };
  },
};
</script>