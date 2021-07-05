<template>
  <v-card
    class="card px-0 py-0 px-md-6 pt-md-6"
    width="100%"
    dark
    color="rgba(0,0,0,0.3)"
  >
    <v-list class="card_list pa-0" color="transparent">
      <v-card-item v-for="i in 20" :key="i" :id="i" />
    </v-list>
    <v-card class="mt-1">
      <div >
        <v-pagination
        color="green"
          v-model="page"
          :length="15"
          :total-visible="8"
        ></v-pagination>
      </div>
    </v-card>
  </v-card>
</template>

<script>
import VCardItem from "../../components/lists/Card";
export default {
  name: "card",

  components: {
    VCardItem,
  },

  created() {
      console.log(window.screen)
  },

  data() {
      return {
          page: 1
      }
  }
};
</script>

<style lang="scss" scoped>
.card {
  height: 81vh;
  &_list {
    overflow-y: scroll;
    height: 70vh;
  }
}
//----scrollbar
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

@media (max-width: 767px) {
  .card {
    height: 70vh;
    &_list {
      overflow-y: scroll;
      height: 60vh;
    }
  }
}
@media (max-width: 321px) {
  .card {
    height: 65vh;
    &_list {
      overflow-y: scroll;
      height: 55vh;
    }
  }
}
</style>