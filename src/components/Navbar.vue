<template>
  <div class="main">
    <div class="bell">
      <i class="fa-solid fa-bell"></i>
      <p class="bell-count">1</p>
    </div>
    <div class="profil">
      <i class="fa-solid fa-user profil-item"></i>
      <i class="fa-solid fa-caret-down profil-item">
        <div class="drop-container">
          <div class="drop">
            <div class="down">
              <i class="fa-solid fa-pen-to-square"></i>
              <h6>Edit Profil</h6>
            </div>
            <div class="down">
              <i class="fa-solid fa-right-to-bracket"></i>
              <h6>Logout</h6>
            </div>
          </div>
        </div>
      </i>
    </div>
  </div>
</template>

<style scoped>
.main {
  width: 100%;
  height: 3.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 1.5rem;
  justify-content: flex-end;
  background-color: var(--light);
  box-shadow: 3px 1px 10px var(--based);
}

.bell {
  height: 2rem;
  width: 2rem;
  background-color: var(--blue);
  border: 2px solid var(--blue);
  border-radius: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--light);
  z-index: 2;
}

.bell:hover {
  border-color: var(--btn-shadow);
  box-shadow: 1px 0 2px var(--btn-shadow);
  cursor: pointer;
}

.fa-bell:active {
  filter: opacity(80%);
}

.bell-count {
  position: absolute;
  background-color: var(--red);
  border: 2px solid var(--cloud);
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  font-size: 0.65rem;
  font-weight: bolder;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -0.45rem;
  right: -0.1rem;
}

.profil {
  height: 2rem;
  background-color: var(--blue);
  border: 2px solid var(--blue);
  padding: 0.3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 0.75rem;
  border-radius: 1rem;
  position: relative;
}

.profil-item {
  margin: 0 0.2rem;
  color: var(--light);
  z-index: 1;
}

.drop-container {
  position: absolute;
  top: 1.4rem;
  right: 0;
  background-color: transparent;
  display: none;
}

.drop {
  background-color: var(--blue);
  color: var(--light);
  transform: translateY(0.7rem);
  height: 4rem;
  width: 6.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 0.5rem;
  border-radius: 0.5rem;
}

.down {
  display: flex;
  flex-direction: row;
  margin: 0.2rem 0;
}

.down h6 {
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
}

.down .fa-solid {
  height: 1.25rem;
  width: 1.25rem;
  border-radius: 50%;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--light);
  color: var(--blue);
}

.fa-caret-down:hover .drop-container {
  display: block;
  cursor: pointer;
}

.fa-caret-down:hover {
  cursor: pointer;
}

.down h6:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>
