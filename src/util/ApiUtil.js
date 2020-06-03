import Axios from "axios";

const catchError = (error) => {
    alert("잠시 후 다시 시도 해주세요.")
    console.log(error)
}

class ApiUtil {

    async excuteAxios(url) {
    }

    get(url, param) {
        Axios.post(url, param)
            .then()
            .catch(catchError)
    }

    async fileUpload(url, file) {
        let formData = new FormData()
        formData.append("file", file)

        const response = await Axios.post(url, formData)
        await response.then().catch(catchError)
    }
}

export default new ApiUtil()
