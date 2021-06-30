<template>
  <section id="dasboard">
    <v-row class="mx-4">
      <v-col>
        <v-total-card :total='totalDownlloading' />
      </v-col>
      <v-col>
        <v-total-card :total='totalUsers' />
      </v-col>
      <v-col>
        <v-total-card :total='totalHystory' />
      </v-col>
    </v-row>
  </section>
</template>

<script>
import VTotalCard from '../components/widget/Total'

export default {
  name: "Home",

  components: {
    VTotalCard
  },

  data() {
    return {
      totalDownlloading: {
        title: 'Количество скачиваний',
        counter: 536
      },
      totalUsers: {
        title: 'Количество пользователей',
        counter: 425
      },
      totalHystory: {
        title: 'Количество публикаций',
        counter: 136
      }
    }
  }
};
</script>

<style lang="scss">
#dasboard {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
}
</style>
