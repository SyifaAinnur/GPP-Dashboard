<script>
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";
export default {
  name: "App",
  components: {
    Vue3ChartJs,
  },
  setup() {
    const pieChart = {
      type: "pie",
      data: {
        labels: [
          "Google Project",
          "Additional Nav",
          "JRku",
          "Nav Enchancement",
        ],
        datasets: [
          {
            backgroundColor: ["#4B3B77", "#E07001", "#2D2347", "#6556EE"],
            data: [40, 20, 80, 10],
          },
        ],
      },
    };

    return {
      pieChart,
    };
  },
};
</script>

<template>
  <div class="section">
    <div class="card">
      <h3>Profit</h3>
      <h6>by project</h6>
      <div class="pie-container">
        <vue3-chart-js v-bind="{ ...pieChart }" class="pie" />
      </div>
    </div>
    <div class="card">
      <h3>Loss</h3>
      <h6>by project</h6>
      <div class="pie-container">
        <vue3-chart-js v-bind="{ ...pieChart }" class="pie" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.section {
  width: 100%;
  background-color: var(--light);
  border-radius: 0.5rem;
  box-shadow: 0 1px 12px 1px var(--based);
  border-top: 2px solid var(--blue);
  color: var(--general);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(23rem, 1fr));
  gap: 3rem;
  margin-top: 3rem;
}

h6 {
  margin-bottom: 1.75rem;
}

.card {
  width: 100%;
  background: none;
  padding: 2rem;
}

.pie-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.pie {
  max-width: 40vw;
  max-height: 40vh;
}
</style>
