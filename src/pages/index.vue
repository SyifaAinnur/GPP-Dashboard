<script setup>
import Navbar from "../components/Navbar.vue";
import TopBottom from "../components/TopBottom.vue";
import LineChart from "../components/LineChart.vue";
import PieChart from "../components/PieChart.vue";
import CostLabel from "../components/CostLabel.vue";
</script>

<template>
  <div class="template">
    <nav>
      <Navbar />
    </nav>
    <main>
      <div class="page-title">
        <h2>Dashboard</h2>
        <div><button>Filter</button></div>
      </div>
      <CostLabel />
      <LineChart />
      <PieChart />
      <TopBottom />
    </main>
  </div>
</template>

<style scoped>
.page-title {
  display: flex;
  flex-direction: row;
}

.page-title h2 {
  width: 8rem;
  text-align: left;
  line-height: 2rem;
}

.page-title div {
  width: calc(100% - 8rem);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 2rem;
}

.page-title button {
  background-color: var(--blue);
  padding: 0.5rem 1.5rem;
  color: var(--light);
  font-size: 1rem;
  font-weight: bold;
  border-radius: 0.5rem;
  border: 2px solid var(--base);
}

.page-title button:hover {
  filter: opacity(95%);
}

.page-title button:active {
  border: none;
}
</style>
