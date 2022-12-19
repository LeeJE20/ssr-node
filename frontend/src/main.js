import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";

import { router } from "./routes"; // 라우터 추가

const app = createApp(App);
// axios 전역화
app.config.globalProperties.$axios = axios;
app.use(router); // 라우터 사용 설정 하기

app.mount("#app");
