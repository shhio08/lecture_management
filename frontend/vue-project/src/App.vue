<!-- src/App.vue -->
<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="40"
      height="40"
    />

    <nav>
      <RouterLink to="/">受講一覧</RouterLink>
      <RouterLink to="/about">授業一覧</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 1200px; /* または、1280px など、適切な幅に設定 */
  margin: 0 auto;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo {
  margin: 0;
}

nav {
  display: flex;
  gap: 1rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  text-decoration: none;
  color: #333;
  padding: 0.5rem;
  border-bottom: 2px solid transparent;
  transition: border-bottom 0.3s;
}

nav a:hover {
  border-bottom: 2px solid #42b983;
}

main {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f2f5;
}
</style>
