<script setup lang="ts">
export interface ICard {
  title?: string;
  subtitle?: string;
  color?: string;
  grafic?: string;
}

defineProps<ICard>();

const chartOptions = {
  chart: {
    id: "vuechart-example",
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
  },
};

const series = [
  {
    name: "series-1",
    data: [30, 40, 35, 50, 49, 60, 70, 91],
  },
];
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
    </div>
  </div>
</template>

