<template>
    <v-container>
        <h1>INGREDIENT: {{id}}</h1>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            id: this.$router.currentRoute.params['id']
        }
    }
}
</script>