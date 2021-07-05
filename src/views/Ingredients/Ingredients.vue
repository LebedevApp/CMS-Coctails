<template>
    <section>
      <v-list class="page" width="100%" color="transparent">
        <section class="mx-5 my-3">
          <v-nav-bar />

          <v-list-cards class="my-3" />
        </section>
      </v-list>
    </section>
</template>

<script>
import VNavBar from '@/components/navigation/PageNavBar'
import VListCards from '../../components/lists/ListCards'

export default {
  name: 'ingredient_page',

  components: {
    VNavBar,
    VListCards
  }

}
</script>

<style lang="scss" scoped>
.page {
  height: 100vh;
}

@media (max-width: 1024px) {
  .page {
  min-height: 100vh;
}
}
</style>