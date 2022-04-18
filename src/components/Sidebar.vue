<script>
export default {
  data() {
    return {
      isExpanded: true,
    };
  },
  computed: {
    expand() {
      return {
        isExpanded: !this.isExpanded,
      };
    },
  },
  methods: {
    toggleMenu() {
      this.isExpanded = !this.isExpanded;
    },
  },
};
</script>

<template>
  <aside :class="expand">
    <div class="logo">
      <img :class="expand" src="../assets/white_gits.png" alt="Logo GITS.ID" />
    </div>

    <!-- toggle-button -->
    <div class="toggle-button" :class="expand">
      <button class="menu-toggle" @click="toggleMenu" :class="expand">
        <i class="fa-solid fa-angles-right"></i>
      </button>
    </div>

    <!-- menu -->
    <h3 :class="expand">Menu</h3>
    <div class="menu">
      <router-link to="/" class="menu-item">
        <i class="fa-solid fa-house-chimney"></i>
        <span class="text" :class="expand">Dashboard</span>
      </router-link>
      <router-link to="/profitability" class="menu-item">
        <i class="fa-solid fa-chart-line"></i>
        <span class="text" :class="expand">Profitability Report</span>
      </router-link>
      <router-link to="/cost" class="menu-item">
        <i class="fa-solid fa-coins"></i>
        <span class="text" :class="expand">Project Cost Report</span>
      </router-link>
      <router-link to="/logtime" class="menu-item">
        <i class="fa-solid fa-business-time"></i>
        <span class="text" :class="expand">Logtime Report</span>
      </router-link>
    </div>
  </aside>
</template>

<style scoped>
aside {
  display: flex;
  flex-direction: column;
  background-color: var(--dark);
  color: var(--light);
  min-width: 4rem;
  width: 4rem;
  overflow: hidden;
  min-height: 100vh;
  padding: 1rem;
  transition: 0.2s ease-in-out;
}

aside:not(:not(.isExpanded)) {
  min-width: var(--sidebar-width);
  width: var(--sidebar-width);
}

.logo {
  margin: 1rem 0;
}

.logo img {
  width: 2rem;
  transition: 0.3s ease-in-out;
}

.logo img:not(:not(.isExpanded)) {
  width: 7rem;
}

.toggle-button {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
  position: relative;
  top: 0;
  transition: 0.2s ease-in-out;
}

.toggle-button:not(:not(.isExpanded)) {
  top: -4rem;
}

.menu-toggle {
  transition: 0.2s ease-in-out;
}

.menu-toggle:not(:not(.isExpanded)) {
  transform: rotate(-180deg);
}

.fa-solid {
  font-size: 1.5rem;
  color: var(--light);
  transition: 0.2s ease-out;
}

.menu-toggle .fa-solid:hover {
  color: var(--blue);
  transform: translateX(0.5rem);
}

h3,
.text {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

h3:not(:not(.isExpanded)),
.text:not(:not(.isExpanded)) {
  opacity: 1;
}

h3 {
  color: var(--grey);
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
}

.menu {
  margin: 0 -1rem;
}

.menu-item {
  display: flex;
  align-items: center;
  transition: 0.2s ease-in-out;
  padding: 0.5rem 1rem;
}

.menu-item:hover,
.router-link-exact-active {
  background-color: var(--shadow);
  border-right: 0.3rem solid var(--blue);
  text-decoration: none;
}

.menu-item:hover > *,
.router-link-exact-active i,
.router-link-exact-active span {
  color: var(--blue);
}

.fa-solid:not(:not(.isExpanded)) {
  margin-right: 1rem;
}

.menu-item .fa-solid {
  padding: 1rem 0;
  width: 3rem;
  transition: ease-in-out;
}

.text {
  color: var(--light);
}
</style>
