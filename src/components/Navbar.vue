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
                <router-link to="/#about" :class="{ active: isActive('/#about') }" @click="closeMenu">ABOUT US</router-link>
        <router-link to="/#services" :class="{ active: isActive('/#services') }" @click="closeMenu">SERVICES</router-link>
        <router-link to="/#portfolio" :class="{ active: isActive('/#portfolio') }" @click="closeMenu">PROJECTS</router-link>
             <router-link to="/#careers" :class="{ active: isActive('/#careers') }" @click="closeMenu">CAREERS</router-link>

        <router-link to="/#contact" :class="{ active: isActive('/#contact') }" @click="closeMenu">CONTACT US</router-link>
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
  padding: 1rem 2rem;
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

/* Mobile styles */
.menu-toggle {
  display: none;
  font-size: 1.5rem;
  background: none;
  border: none;
  color: white;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  nav {
    position: absolute;
    top: 64px;
    right: 0;
    background: #000;
    flex-direction: column;
    gap: 1rem;
    width: 200px;
    padding: 1rem;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
  }

  nav.open {
    transform: translateX(0%);
  }
}
</style>
