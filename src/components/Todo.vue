<template>
    <v-list-item-group v-model="selected" color="primary">
        <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
                <IconBtn :event="playMp3" icon="mdi-play"></IconBtn>
            </v-list-item-action>
            <v-list-item-action>
                <IconBtn :event="()=>{alert('download')}" icon="mdi-download"></IconBtn>
            </v-list-item-action>
            <v-list-item-action>
                <IconBtn :event="()=>{alert('delete')}" icon="mdi-delete"></IconBtn>
            </v-list-item-action>
        </v-list-item>
    </v-list-item-group>
</template>

<script>
    import IconBtn from "./IconBtn"
    import {EventBus} from "../util/EventBus";

    export default {
        name: 'Todo',
        comments: {
            IconBtn
        },
        props: {
            mp3: {
                type: String
            },
            items: {
                type: Array
            }
        },
        data: () => ({
            selected: null,
        }),
        methods: {
            playMp3() {
                EventBus.$emit("mp3", "http://localhost:8080/ebook/play/" + "")
                // this.mp3 = "http://localhost:8080/ebook/play/" + ""
            }
        }
    }
</script>

<style>

</style>
