<script setup>
import Sidebar from "./components/Sidebar.vue";
</script>

<template>
  <div class="app">
    <Sidebar />
    <router-view />
  </div>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  font-family: Ubuntu, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

:root {
  --dark: #1a2b45;
  --shadow: #334155;
  --general: #49576c;
  --table: #c4c4c4;
  --base: #f8f9fc;
  --based: #dfe0e2;
  --light: #fff;
  --blue: #5b99e6;
  --grey: #64748b;
  --red: #ed3237;
  --btn-shadow: #40b1ee;
  --sidebar-width: 20rem;
}

body {
  background-color: var(--base);
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.app {
  display: flex;
}

.template {
  flex: 1 1 0;
  padding: 0;
}

main {
  flex: 12 1 0;
  padding: 1.5rem;
}

main h2 {
  color: var(--general);
}

nav {
  flex: 1 1 0;
  padding: 0;
  height: 3.5rem;
}
</style>
