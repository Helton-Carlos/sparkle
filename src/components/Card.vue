<script setup lang="ts">
import { ref } from "vue"

export interface ICard {
  title?: string;
  subtitle?: string;
  color?: string;
  grafic?: string;
  input?: string
  code?: boolean
}

defineProps<ICard>();

const chartOptions = {
  chart: {
    id: "vuechart-example",
  },
  xaxis: {
    categories: ['Seg', 'ter', 'qua', 'qui', 'sex', 'sab'],
  },
};

const series = [
  {
    name: "series-1",
    data: [30, 40, 35, 50, 49, 60],
  },
];

const text = ref<string>("")
const email = ref<string>("")

function shippingForm(){
  alert(text.value + " " + email.value)
}
</script>

<template>
  <div>
    <div class="w-full md:w-[320px] rounded-md bg-white shadow-md">
      <div class="flex px-4 pt-3">
        <div class="pr-1 mr-1 bg-red-500" v-if="color === 'red'"></div>
        <div class="pr-1 mr-1 bg-blue-500" v-if="color === 'blue'"></div>
        <div class="pr-1 mr-1 bg-green-500" v-if="color === 'green'"></div>

        <h4 class="font-bold capitalize">{{ title }}</h4>
      </div>

      <div class="px-4 pt-2 pb-3" v-if="subtitle">
        <p>
          {{ subtitle }}
        </p>
      </div>

      <div class="m-2" v-if="grafic">
        <apexchart
          type="bar"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </div>

      <form class="mx-4" v-if="input" @submit="shippingForm">

        <input type="text" v-model="text" class="w-full p-1 my-1 bg-white border-b-2 rounded focus:ring-indigo-500 focus:border-indigo-500" placeholder="Nome Completo">
        
        <input type="email" v-model="email" class="w-full p-1 bg-white border-b-2 rounded" placeholder="Digite o e-mail">
      
        <input type="submit" value="Enviar" class="px-4 py-1 mt-2 mb-3 text-white bg-indigo-500 rounded shadow hover:bg-indigo-800">
      
      </form>

      <div v-if="code"  class="px-12">
        <vue-qrcode value="Helton Brito" :options="{ width: 210 }"></vue-qrcode>
      </div>
    </div>
  </div>
</template>

