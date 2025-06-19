<template>
  <section class="about">
    <div class="container">
      <div class="text" data-aos="fade-right">
        <h2 data-aos="fade-up">ABOUT US</h2>
        <h3 data-aos="fade-up" data-aos-delay="100">We Execute Our Ideas From The Start To<br> Finish</h3>
        <p data-aos="fade-up" data-aos-delay="200">
          9X Technology is a leading-edge tech firm dedicated to innovation and transformative solutions. We specialize in custom software development, harnessing the power of artificial intelligence, machine learning, and cutting-edge technologies to create unparalleled digital experiences. Our team of experts excels in mobile and web development, crafting intuitive applications and responsive platforms that meet the diverse needs of modern businesses.
        </p>
        <button class="load-more-btn" data-aos="zoom-in" data-aos-delay="300">Load More</button>
      </div>
      <img data-aos="fade-left" src="https://9xtechnology.com/assets/images/skull.png" alt="Skull Graphic" />
    </div>

    <!-- Info Boxes -->
    <div class="info-boxes">
      <div class="box" data-aos="zoom-in" data-aos-delay="100">
        <h3>MISSION</h3>
        <p>"9x Technology's mission is to deliver innovative, customized tech solutions that transform businesses and enhance lives worldwide."</p>
      </div>
      <div class="box" data-aos="zoom-in" data-aos-delay="200">
        <h3>VISION</h3>
        <p>"9x Technology aims to revolutionize industries through cutting-edge innovations, empowering a globally connected future."</p>
      </div>
      <div class="box" data-aos="zoom-in" data-aos-delay="300">
        <h3>WHY US</h3>
        <p>"We specialize in custom software development, harnessing the power of Artificial Intelligence, Machine Learning, and cutting-edge technologies to create unparalleled digital experiences."</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 2rem;
  text-align: center;
  background-image: url('https://www.shutterstock.com/shutterstock/videos/1064278558/thumb/12.jpg?ip=x480');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  color: white;
}

.about::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(0, 0, 0, 0.6);
}

.about > * {
  position: relative;
  z-index: 2;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 1200px;
  margin: auto;
}

.text {
  flex: 1;
  max-width: 600px;
  text-align: left;
}

img {
  flex: 1;
  max-width: 400px;
  width: 100%;
  border-radius: 10px;
}

h2 {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  margin-bottom: 1rem;
  color: #f3c300;
}

h3 {
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  margin-bottom: 1rem;
}

p {
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  line-height: 1.6;
  margin-bottom: 2rem;
}

.load-more-btn {
  background-color: #f3c300;
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
}
.load-more-btn:hover {
  background-color: #d4aa00;
}

/* Info Boxes */
.info-boxes {
  margin-top: 4rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

.box {
  background-color: #171515;
  color: #ffffff;
  border: 1px solid #ffffff;
  padding: 2rem;
  flex: 1;
  min-width: 280px;
  max-width: 350px;
  text-align: center;
  border-radius: 8px;
  height: auto;
}

.box h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  letter-spacing: 1px;
  color: #f3c300;
}

.box p {
  font-size: 1.2rem;
  line-height: 1.6;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .text {
    text-align: center;
  }

  img {
    margin-top: 1.5rem;
  }
}
</style>
