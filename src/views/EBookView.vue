<template>
    <v-container class="container" fill-height fluid>
        <v-row align-center="center" justify="center">
            <v-scroll-x-transition>
                <v-card v-show="true" width="50%" min-width="300">
                    <v-card-title>
                        <v-row>
                            <v-col>
                                <h1>Book Player</h1>
                            </v-col>
                            <v-col class="text-right">
                                <IconBtn :event="uploadBtn" icon="mdi-upload"></IconBtn>
                            </v-col>
                        </v-row>
                    </v-card-title>
                    <v-card-text>
                        <v-audio :file="mp3" style="box-shadow:none"></v-audio>
                        <TodoList :items="items"></TodoList>
                        <v-pagination :length="5" v-model="page" circle></v-pagination>
                    </v-card-text>
                </v-card>
            </v-scroll-x-transition>
        </v-row>
        <FileUploadModal v-model="modal"></FileUploadModal>
    </v-container>
</template>

<script>
    import Axios from "axios"
    import VuetifyAudio from 'vuetify-audio';
    import FileUploadModal from './FileUploadModal';
    import IconBtn from "../components/IconBtn";
    import TodoList from "../components/TodoList"
    import {EventBus} from "../util/EventBus";

    export default {
        name: "EBookView",
        components: {
            'v-audio': VuetifyAudio,
            FileUploadModal,
            IconBtn,
            TodoList
        },
        data: () => ({
            modal: false,
            page: 1,
            items: [
                {title: '리액트 네이티브 초판'},
            ],
            // mp3: null
        }),
        created() {
          // this.getList()
        },
        methods: {
            uploadBtn() {
                this.modal = true
            },
            getList() {
                Axios.get("http://localhost:8080/ebook/list/0").then(response=>this.items = response.data)
            }
        },
        computed: {
            mp3() {
                let result = null
                EventBus.$on("mp3", mp3 => result = mp3)
                return result
            }
        }
    }
</script>

<style>
    .container {
        background-image: url("https://file.mk.co.kr/mkde_7/N0/2019/09/20190911_4227439_1568163144.jpeg");
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>
