<template>
    <v-dialog width="30%" min-width="300" v-model="status">
        <v-card>
            <v-card-title>파일을 올려주세요...</v-card-title>
            <v-card-text>
                <FileUpload></FileUpload>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import FileUpload from '../components/FileUpload'

export default {
            //file upload 클릭 시 loading, disable true 만들기, 업로드 롤백 시 false
    components: {
        FileUpload
    },
    props: {
        modal: {
            type: Boolean
        }
    },
    computed: {
        status: {
            get() {
                return this.modal
            },
            set(status) {
                return status
            }
        }
    }
}
</script>

<style>

</style>