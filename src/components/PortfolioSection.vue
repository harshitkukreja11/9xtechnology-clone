<template>
  <section class="about-section">
    <div class="content-container">
      <p class="about-text">
        At 9X Technology, we are passionate about innovation and committed to transforming the way businesses operate in the digital age.
        Our journey is characterized by a relentless pursuit of excellence, a dedication to ethical practices, and a customer-centric approach.
        We are also at the forefront of IoT development, connecting devices for smarter, more efficient operations.
        Our commitment doesn't stop at development; we offer ongoing tech support and maintenance to ensure the seamless functionality of the solutions we provide.
        Our aim is to empower businesses through digital transformation, offering adaptive solutions that keep our clients ahead of the curve in this ever-evolving tech landscape.
      </p>
      <p class="ceo-name"><span class="highlight">Yatin Kukreja</span><br />CEO, 9X Technology LLC</p>
    </div>

    <!-- Floating Widget -->
    <div class="floating-widget">
      <!-- Show grabber and close button only if visible -->
      <div v-if="showGrabberImage" class="grabber-container">
        <button class="close-btn" @click="showGrabberImage = false" aria-label="Close Icon">✕</button>
        <img
          src="https://embed.tawk.to/_s/v4/assets/images/attention-grabbers/37-br.svg"
          alt="Chat Icon"
          class="grabber-img"
        />
      </div>

      <!-- Online Button always visible -->
      <a
        href="https://tawk.to/chat/your-chat-id"
        target="_blank"
        class="online-btn"
        aria-label="Chat Online"
      >
        Online
      </a>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue'

const showGrabberImage = ref(true)
</script>
<style scoped>
.about-section {
  background: linear-gradient(135deg, #0a2e73, #852a62);
  padding: 4rem 2rem;
  text-align: left;
  color: white;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.content-container {
  max-width: 900px;
  margin: 0 auto;
  line-height: 1.8;
}

.about-text {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.highlight {
  color: #ffcc00;
  font-weight: 600;
  font-size: 2rem;
}

.ceo-name {
  font-size: 1.3rem;
  font-weight: bold;
  margin-top: 1rem;
}

/* Floating Widget */
.floating-widget {
  position: fixed;
  bottom: 15px;
  right: 15px;
  width: 110px;
  z-index: 1000;
  text-align: center;
}

/* Container for grabber image and close icon */
.grabber-container {
  position: relative;
}

/* Close Button (for image only) */
.close-btn {
  position: absolute;
  top: -10px;
  right: -10px;
  background: #ffcc00;
  color: black;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  font-weight: bold;
  z-index: 1;
}

/* Grabber SVG */
.grabber-img {
  width: 100%;
  margin-bottom: 8px;
  margin-top: -2px;
}

/* Online Button */
.online-btn {
  display: inline-block;
  background-color: #ffcc00;
  color: #000;
  font-weight: bold;
  padding: 6px 12px;
  border-radius: 4px;
  text-decoration: none;
  transition: background 0.3s ease;
  font-size: 0.9rem;
  width: 100%;
  box-sizing: border-box;
}

.online-btn:hover {
  background-color: #e0b800;
}
</style>
