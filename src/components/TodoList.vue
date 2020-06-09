<template>
    <v-list dense>
        <v-subheader>
            <v-flex xs9>Title</v-flex>
            <v-flex xs1>Play</v-flex>
            <v-flex xs1>Down</v-flex>
            <v-flex xs1>Del</v-flex>
        </v-subheader>
        <Todo :items="items"></Todo>
    </v-list>
</template>

<script>
    import Todo from './Todo'

    export default {
        name: 'TodoList',
        comments: {
            Todo
        },
        props: {
            items: {
                type: Array
            }
        }
    }
</script>

<style>

</style>
