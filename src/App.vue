<template>
  <Navbar />
 
  <router-view />
  <FloatingWidget />
   <Footer />
</template>

<script setup>
import FloatingWidget from './components/FloatingWidget.vue';
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue'
</script>
