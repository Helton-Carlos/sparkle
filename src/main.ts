import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueApexCharts from "vue3-apexcharts";
import VueQrcode from '@chenfengyuan/vue-qrcode';
import { makeServer } from "./server";
import vue3GoogleLogin from 'vue3-google-login';
import './index.css'
import 'animate.css';

if (process.env.NODE_ENV === "development") {
  makeServer()
}

const app = createApp(App)  

app.use(VueApexCharts);
app.use(vue3GoogleLogin, {
  clientId: 'YOUR_GOOGLE_CLIENT_ID'
});
app.use(router);
app.component(VueQrcode.name, VueQrcode);
app.mount('#app');
