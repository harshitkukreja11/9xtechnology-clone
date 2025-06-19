<template>
  <header class="navbar">
    <div class="container">
      <router-link to="/" class="logo">
        <img src="https://9xtechnology.com/assets/images/logo.png" alt="9X Logo" />
      </router-link>

      <button class="menu-toggle" @click="isMenuOpen = !isMenuOpen">
        <span :class="{ open: isMenuOpen }">&#9776;</span>
      </button>

      <nav :class="{ open: isMenuOpen }">
  <router-link to="/" :class="{ active: isActive('/') }" @click="closeMenu">HOME</router-link>

 <router-link to="/about" @click="closeMenu" :class="{ active: isActive('/about') }">ABOUT US</router-link>
<router-link to="/services" @click="closeMenu" :class="{ active: isActive('/services') }">SERVICES</router-link>
<router-link to="/projects" @click="closeMenu" :class="{ active: isActive('/projects') }">PROJECTS</router-link>

  <a href="#careers" @click="closeMenu">CAREERS</a>
  <a href="#contact" @click="closeMenu">CONTACT US</a>
</nav>

    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const isMenuOpen = ref(false)
const closeMenu = () => {
  isMenuOpen.value = false
}

const route = useRoute()
const isActive = (path) => {
  return route.path === path || route.hash === path
}
</script>

<style scoped>
.navbar {
  background: #000000d9;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
}
.container {
  max-width: 1200px;
  margin: auto;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo img {
  height: 40px;
}

nav {
  display: flex;
  gap: 1.5rem;
}

nav a {
  position: relative;
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}
nav a:hover {
  color: gold;
}
nav a.active::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 3px;
  background: gold;
}

/* Hamburger Button */
.menu-toggle {
  display: none;
  font-size: 1.8rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  z-index: 1001;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  nav {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    background: #000;
    flex-direction: column;
    align-items: flex-start;
    padding: 5rem 2rem 2rem;
    gap: 1.2rem;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
    z-index: 1000;
  }

  nav.open {
    transform: translateX(0%);
  }

  nav a {
    font-size: 1.1rem;
  }
}
</style>
