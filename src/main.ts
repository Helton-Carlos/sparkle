import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueApexCharts from "vue3-apexcharts";
import VueQrcode from '@chenfengyuan/vue-qrcode';
import './index.css'
import 'animate.css';

createApp(App).use(VueApexCharts).use(router).component(VueQrcode.name, VueQrcode).mount('#app')
