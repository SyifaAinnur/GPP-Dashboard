<script>
export default {
  data() {
    return {
      projects: [
        { name: "arya", value: 127 },
        { name: "agus", value: 65 },
        { name: "bagus", value: 232 },
        { name: "baguss", value: 145 },
        { name: "bagusss", value: 453 },
        { name: "bagussss", value: 96 },
        { name: "bagusssss majajh aznnvxasv", value: 321 },
        { name: "bagussssss", value: 45 },
        { name: "bagusssssss", value: 68 },
        { name: "bagussssssss", value: 31277557855 },
        { name: "bagusssssssss", value: 222 },
      ],
    };
  },
  computed: {
    topProject() {
      function compare(a, b) {
        if (a.value < b.value) return 1;
        if (a.value > b.value) return -1;
        return 0;
      }
      return this.projects.sort(compare);
    },
    bottomProject() {
      function compare(a, b) {
        if (a.value < b.value) return -1;
        if (a.value > b.value) return 1;
        return 0;
      }
      return this.projects.sort(compare);
    },
  },
};
</script>

<template>
  <div class="section">
    <div class="card">
      <h3>Top 5 Project</h3>
      <table cellpadding="5rem">
        <thead>
          <tr>
            <th class="project">Project</th>
            <th class="amount">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="project in topProject.slice(0, 5)" :key="project.name">
            <td class="project">{{ project.name }}</td>
            <td class="amount">{{ project.value }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="card">
      <h3>Bottom 5 Project</h3>
      <table cellpadding="5rem">
        <thead>
          <tr>
            <th class="project">Project</th>
            <th class="amount">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="project in bottomProject.slice(0, 5)" :key="project.name">
            <td class="project">{{ project.name }}</td>
            <td class="amount">{{ project.value }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.section {
  width: 100%;
  background: none;
  color: var(--general);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(23rem, 1fr));
  gap: 3rem;
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

table {
  width: 100%;
}

thead {
  background-color: var(--table);
}

tbody tr:nth-child(even) {
  background-color: var(--table);
}

.project {
  text-align: left;
}

.amount {
  text-align: center;
}
</style>
