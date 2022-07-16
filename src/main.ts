import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueApexCharts from "vue3-apexcharts";
import VueQrcode from '@chenfengyuan/vue-qrcode';
import { makeServer } from "./server";
import GAuth from 'vue3-google-oauth2'
import './index.css'
import 'animate.css';

if (process.env.NODE_ENV === "development") {
  makeServer()
}

const app = createApp(App)  

const idClient = '892934671545-69t18g6nh8iv1l7ch9t8hbk476i1ncbd.apps.googleusercontent.com'
const gAuthOptions = { clientId: idClient, scope: 'email', prompt: 'consent', fetch_basic_profile: false }

app.use(GAuth, gAuthOptions);
app.use(VueApexCharts);
app.use(router);
app.component(VueQrcode.name, VueQrcode);
app.mount('#app');
