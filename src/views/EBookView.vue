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
                                <v-btn @click="modal=true" icon color="blue">
                                    <v-icon>mdi-upload</v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card-title>
                    <v-card-text>
                        <v-audio style="box-shadow:none"></v-audio>
                        <v-list dense>
                            <v-subheader>
                                <v-flex xs9>Title</v-flex>
                                <v-flex xs1>Play</v-flex>
                                <v-flex xs1>Down</v-flex>
                                <v-flex xs1>Del</v-flex>
                            </v-subheader>
                            <v-list-item-group v-model="item" color="primary">
                                <v-list-item v-for="(item, i) in items" :key="i">
                                    <v-list-item-content>
                                        <v-list-item-title v-text="item.text"></v-list-item-title>
                                    </v-list-item-content>
                                    <v-list-item-action>
                                        <v-btn icon>
                                            <v-icon>mdi-play</v-icon>
                                        </v-btn>
                                    </v-list-item-action>
                                    <v-list-item-action>
                                        <v-btn icon>
                                            <v-icon>mdi-download</v-icon>
                                        </v-btn>
                                    </v-list-item-action>
                                    <v-list-item-action>
                                        <v-btn icon>
                                            <v-icon>mdi-delete</v-icon>
                                        </v-btn>
                                    </v-list-item-action>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                        <v-pagination :length="5" v-model="page" circle></v-pagination>
                    </v-card-text>
                </v-card>
            </v-scroll-x-transition>
        </v-row>
        <FileUploadModal v-model="modal"></FileUploadModal>
    </v-container>

</template>

<script>
    import VuetifyAudio from 'vuetify-audio';
    import FileUploadModal from './FileUploadModal';

    export default {
        components: {
            'v-audio': VuetifyAudio,
            FileUploadModal
        },
        data: () => ({
            modal: false,
            page: 1,
            item: null,
            items: [
                {text: '리액트 네이티브 초판'},
                {text: 'Head First Servlets & JSP'},
                {text: 'J2EE Development without EJB'},
            ]
        })
    }
</script>

<style>
    .container {
        background-image: url("https://file.mk.co.kr/mkde_7/N0/2019/09/20190911_4227439_1568163144.jpeg");
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>
