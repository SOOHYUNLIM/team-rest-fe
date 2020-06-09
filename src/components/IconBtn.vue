<template>
    <v-btn @click="event" icon>
        <v-icon>{{icon}}</v-icon>
    </v-btn>
</template>

<script>
    export default {
        name: 'IconBtn',
        props: {
            event: {
                type: Function
            },
            icon: {
                type: String
            }
        }
    }
</script>

<style>

</style>
