<template>
    <v-layout align-content justify="center" column>
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
import Axios from "axios";

export default {
    name: 'FileUpload'

    //확인을 누르면 axios호출
    //대기중으로 변경시키기 위해 상태 data 들고있기
    //누르면 상위 컴포넌트에게 대기하라 명령하고 응답오면 대기종료 보내기
    ,
    data() {
      return {
          file: null
      }
    },
    methods: {
        fileUpload() {
            if(this.file) {
                let formData = new FormData()
                formData.append("file", this.file)
                Axios.post("http://localhost:8080/ebook/upload", formData).then(()=>alert("파일 변환 완료!")).catch(error=>console.log(error))
            } else {
                alert("파일을 선택해주세요!")
            }
        }
    }
}
</script>

<style>

</style>
