import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './index.css'
import 'animate.css';
import VueApexCharts from "vue3-apexcharts";
import VueQrcode from '@chenfengyuan/vue-qrcode';
import { globalCookiesConfig } from "vue3-cookies";
import { makeServer } from "./server";
import vue3GoogleLogin from 'vue3-google-login'

//mirage-js
if (process.env.NODE_ENV === "development") {
  makeServer()
}

//vue3-cookies
globalCookiesConfig({
  expireTimes: "30d",
  path: "/",
  domain: "",
  secure: true,
  sameSite: "None",
});

const app = createApp(App)  
const idClient = '892934671545-69t18g6nh8iv1l7ch9t8hbk476i1ncbd.apps.googleusercontent.com'

app.use(vue3GoogleLogin, {
  clientId: idClient
});
app.use(VueApexCharts);
app.use(router);
app.component(VueQrcode.name, VueQrcode);
app.mount('#app');
