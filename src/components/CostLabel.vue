<script>
export default {
  data() {
    return {
      costs: [
        {
          name: "Revenue",
          value: 1.34,
          ico: "fa-solid fa-money-bill-trend-up",
        },
        {
          name: "Direct Cost",
          value: 0.85,
          ico: "fa-solid fa-hand-holding-dollar",
        },
        {
          name: "Overhead Cost",
          value: 0.43,
          ico: "fa-solid fa-magnifying-glass-dollar",
        },
        {
          name: "General Cost",
          value: 0.33,
          ico: "fa-solid fa-money-bill-transfer",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="section">
    <div class="card" v-for="cost in costs" :key="cost.name">
      <span class="ico"><i :class="cost.ico"></i></span>
      <div class="value">
        <h5>{{ cost.name }}</h5>
        <h2>{{ cost.value }}</h2>
      </div>
    </div>
  </div>
</template>

<style scoped>
.section {
  width: 100%;
  background: none;
  color: var(--general);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
  gap: 3rem;
  margin-top: 2rem;
}

.card {
  width: 100%;
  background-color: var(--light);
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 12px 1px var(--based);
  border-top: 2px solid var(--blue);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

h5 {
  color: var(--blue);
}

.ico {
  width: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin-right: 1rem;
}

.value {
  min-width: 6rem;
}
</style>
