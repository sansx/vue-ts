import axios from "axios"
import vue from "vue"

vue.prototype.$http = axios
//axios.defaults.baseURL = "http://api.douban.com/v2/movie/"

