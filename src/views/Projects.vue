<template>
  <!-- Background Section with Title and Banner -->
  <section class="services">
    <div class="intro-section">
      <div class="intro-text">
        <h2 class="section-title">OUR PROJECTS</h2>
        <p class="section-para">Transform Your Digital Presence<br> with 9x Technology</p>
      </div>
      <img src="https://9xtechnology.com/assets/images/projects.jpg" alt="projects" class="marketing" />
    </div>
  </section>

  <!-- Image Grid (outside background section) -->
  <section class="projects">
    <div class="project-grid">
      <div v-for="(image, index) in projectImages" :key="index" class="project-card">
        <img :src="image" alt="Project Image" class="project-image" />
      </div>
    </div>
  </section>
</template>

<script setup>
const projectImages = [
  "https://9xtechnology.com/assets/images/portfolio/qgpt.png",
  "https://9xtechnology.com/assets/images/portfolio/bgpt.png",
  "https://9xtechnology.com/assets/images/portfolio/peterly.png",
  "https://9xtechnology.com/assets/images/portfolio/9xpro.png",
  "https://9xtechnology.com/assets/images/portfolio/LTG.png",
];
</script>

<style scoped>
/* Background Section */
.services {
  padding: 6rem 2rem;
  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3gd1MsHDLitwcUZRTzadktJTWNkFORU7BZqIzDP3q5h669FjD');
  background-size: cover;
  background-position: center;
  color: white;
}

.intro-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 1200px;
  margin: auto;
}

.intro-text {
  flex: 1;
  min-width: 280px;
  margin-left: 5%;
}

.section-title {
  font-size: 2rem;
  color: #C79232;
  margin-bottom: 1rem;
  text-align: left;
}

.section-para {
  font-size: 1.8rem;
  text-align: left;
  font-weight: 1000;
}

.marketing {
  flex: 1;
  max-width: 500px;
  width: 100%;
  height: auto;
  margin: 0 auto;
  border-radius: 8px;
}

/* Project Grid Outside Background */
.projects {

  padding: 4rem 2rem;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 1100px;
  margin: auto;
}

.project-card {
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
}


.project-image {
  width: 100%;
  height: auto;
  display: block;
}

/* Responsive: 1 image per row on small devices */
@media (max-width: 768px) {
  .intro-section {
    flex-direction: column;
    text-align: center;
  }

  .section-title,
  .section-para {
    text-align: center;
  }

  .project-grid {
    grid-template-columns: 1fr;
  }
}
</style>
