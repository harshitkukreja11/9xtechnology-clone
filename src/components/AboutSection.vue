<template>
  <section class="about">
    <div class="container">
      <div class="text">
        <h2>ABOUT US</h2>
        <h3>We Execute Our Ideas From The Start To<br> Finish</h3>
        <p>9X Technology is a leading-edge tech firm dedicated to innovation and transformative solutions. We specialize in custom software development, harnessing the power of artificial intelligence, machine learning, and cutting-edge technologies to create unparalleled digital experiences. Our team of experts excels in mobile and web development, crafting intuitive applications and responsive platforms that meet the diverse needs of modern businesses.
        </p>
        <button class="load-more-btn">Load More</button>
      </div>
      <img src="https://9xtechnology.com/assets/images/skull.png" alt="Skull Graphic" />
    </div>
     <!-- Black Section with 3 Boxes -->
    <div class="info-boxes">
      <div class="box">
        <h3>MISSION</h3>
        <p>"9x Technology's mission is to deliver innovative, customized tech solutions that transform businesses and enhance lives worldwide."</p>
      </div>
      <div class="box">
        <h3>VISION</h3>
        <p>"9x Technology aims to revolutionize industries through cutting-edge innovations, empowering a globally connected future."</p>
      </div>
      <div class="box">
        <h3>WHY US</h3>
        <p>"We specialize in custom software development, harnessing the power of Artificial Intelligence, Machine Learning, and cutting-edge technologies to create unparalleled digital experiences."</p>
      </div>
    </div>
  </section>
</template>
<style scoped>
.about {
  padding: 1rem 2rem;
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
}
.text {
  flex: 1;
  max-width: 500px;
  color: #ffffff;
}
img {
  flex: 1;
  width: 400px;
  max-width: 100%;
  border-radius: 10px;
}
h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
    color: #f3c300;

}
h3{
   font-size: 1.5rem;
}
p {
  font-size: 1.3rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}
.load-more-btn {
  background-color: #f3c300; /* Golden color */
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.load-more-btn:hover {
  background-color: #d4aa00;
}

/* Info Boxes Section */
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
  height:400px ;
}
.box h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  letter-spacing: 1px;
  color: #f3c300;
}
.box p {
  font-size: 1.4rem;
  line-height: 1.6;
}
</style>