<template>
    <v-card  dark color="rgba(0,0,0,0.6)" min-width="200">
        <p class="text-center text-body-1 font-weight-light pt-3">{{total.title}}</p>
        <v-divider></v-divider>
        <v-container>
            <p class="text-center text-body-1 font-weight-light py-3">Всего: {{total.counter}}</p>
        </v-container>
    </v-card>
</template>

<script>
export default {
    name: 'total-card',

    props: {
        total: {
            type: Object
        }
    }
}
</script>