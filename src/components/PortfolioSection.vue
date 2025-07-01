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

    
  </section>
</template>
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
/* Responsive Design */
@media (max-width: 768px) {
  .about-section {
    padding: 2rem 1rem;
    text-align: center;
  }

  .about-text {
    font-size: 1rem;
    text-align: justify;
  }

  .highlight {
    font-size: 1.5rem;
  }

  .ceo-name {
    font-size: 1rem;
  }

 
}

@media (max-width: 480px) {
  .highlight {
    font-size: 1.2rem;
  }
}
</style>
