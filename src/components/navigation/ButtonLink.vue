<template>
    <section>
      <v-list-item link :to="item.to" color="light-green accent-3">
        <v-icon class="mr-3">{{item.icon}}</v-icon>
        <v-list-item-content>
          <v-list-item-title class="text-subtitle-2 font-weight-light">{{item.name}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
    </section>
</template>

<script>
export default {
    name: 'button_link',

    props: {
        item: {
            type: Object,
            require: true
        }
    }
}
</script>