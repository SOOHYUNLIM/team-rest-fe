<template>
    <v-layout align-center="center" justify="center" column>
        <v-row>
            <v-col cols="4">
                <v-switch label="번역"></v-switch>
            </v-col>
            <v-col cols="8">
                <v-radio-group row>
                    <v-radio label="남자"></v-radio>
                    <v-radio label="여자"></v-radio>
                </v-radio-group>
            </v-col>
        </v-row>
        <v-file-input v-model="file" accept="application/pdf" label="파일을 선택해주세요..."></v-file-input>
        <v-btn @click="fileUpload" depressed block>확인</v-btn>
    </v-layout>
</template>

<script>
// import ApiUtil from "../util/ApiUtil";
import Axios from "axios"

export default {
    name: 'FileUpload',
    props: {
        event: {
            type: Boolean
        }
    },
    data() {
      return {
          file: null
      }
    },
    methods: {
        fileUpload() {
            if(this.file) {
                this.$emit('input', true)
                let formData = new FormData()
                formData.append("file", this.file)
                Axios.post("http://localhost:8080/ebook/upload", formData)
                    .then(()=>{
                        alert("파일 변환 완료!")
                        this.$emit('input', false)
                    })
                    .catch(error=>{
                        console.log(error)
                        // this.$emit('input', false)
                    })
                // ApiUtil.fileUpload("http://localhost:8080/ebook/upload", this.file)
            } else {
                alert("파일을 선택해주세요!")
            }
        }
    }
}
</script>

<style>

</style>
