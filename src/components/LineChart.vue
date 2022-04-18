<script>
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";

export default {
  name: "App",
  components: {
    Vue3ChartJs,
  },
  setup() {
    const lineChart = {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
          {
            label: "Revenue",
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: "orange",
            tension: 0,
            backgroundColor: "white",
          },
          {
            label: "Total Cost",
            data: [70, 25, 110, 90, 5, 60, 30],
            fill: false,
            borderColor: "#5b99e6",
            tension: 0,
            backgroundColor: "white",
          },
        ],
      },
    };

    return {
      lineChart,
    };
  },
};
</script>

<template>
  <div class="section">
    <div class="card">
      <h3>Profit-Loss</h3>
      <div class="line-container">
        <vue3-chart-js v-bind="{ ...lineChart }" class="line" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.section {
  width: 100%;
  background: none;
  color: var(--general);
  margin-top: 3rem;
}

h3 {
  margin-bottom: 1.75rem;
}

.card {
  width: 100%;
  background-color: var(--light);
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 12px 1px var(--based);
  border-top: 2px solid var(--blue);
}

.line-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.line {
  max-width: 60vw;
  max-height: 40vh;
}
</style>
