<template>
    <section>
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
/* Responsive Design */
@media (max-width: 768px) {

  .floating-widget {
    width: 90px;
    bottom: 10px;
    right: 10px;
  }

  .online-btn {
    font-size: 0.8rem;
    padding: 5px 10px;
  }

  .grabber-img {
    width: 100%;
  }

  .close-btn {
    width: 18px;
    height: 18px;
    font-size: 0.8rem;
  }
}


</style>