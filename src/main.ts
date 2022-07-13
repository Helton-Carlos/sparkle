import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueApexCharts from "vue3-apexcharts";
import VueQrcode from '@chenfengyuan/vue-qrcode';
import { makeServer } from "./server"
import './index.css'
import 'animate.css';

  if (process.env.NODE_ENV === "development") {
    makeServer()
  }

createApp(App).use(VueApexCharts).use(router).component(VueQrcode.name, VueQrcode).mount('#app')
