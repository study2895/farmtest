createApp(App).use(store).use(router).mount("#app").use(BootstrapVue3)

//vue 기본 설정
import { createApp } from "vue"
import App from "./App.vue"
import "./registerServiceWorker"
import router from "./router/index.js"
import store from "./store"

//bootstrap 설정
import BootstrapVue3 from "bootstrap-vue-3"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue-3/dist/bootstrap-vue-3.css"

//axios 설정
import axios from "axios"

Vue.prototype.$http = axios

//fonts 전역 폰트 설정
import "./assets/fonts/pretendard-subset-woff2/Pretendard-SemiBold.subset.woff2"
import "./assets/css/global.css"
