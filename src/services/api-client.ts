import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key:'62685a484969431daf7405f4992760d7'
    }
})