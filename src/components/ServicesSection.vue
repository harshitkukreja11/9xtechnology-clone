<template>
  <section class="services">
    <div>
      <img src="https://9xtechnology.com/assets/images/marketting-services.png" alt="services" class="marketing" />
    </div>
    <h2 class="section-title">IT SERVICES</h2>

    <Swiper
      :modules="[Pagination, Autoplay]"
      :slides-per-view="3"
      :space-between="30"
      :loop="true"
      :autoplay="{ delay: 2500 }"
      :pagination="{ clickable: true }"
      class="carousel"
    >
      <SwiperSlide v-for="(service, index) in services" :key="index">
        <div class="flip-card">
          <div class="flip-inner">
            <div class="flip-front">
              <img :src="service.image" class="card-img" />
            </div>
            <div class="flip-back">
              <h3>{{ service.title }}</h3>
              <p>{{ service.description }}</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const services = [
  {
    title: "Metaverse Services",
    description: "At 9X Technology, we are at the forefront of the Metaverse revolution. We offer cutting-edge solutions that enable businesses to explore and capitalize on the endless possibilities of the Metaverse. From virtual reality (VR) and augmented reality (AR) experiences to immersive 3D environments, our Metaverse services help clients create unique and engaging experiences for their audiences.",
    image: "https://9xtechnology.com/assets/images/services/Metaverse%20Service%20Provider.jpg",
  },
  {
    title: "IT Network Services",
    description: "As a reliable IT network services provider, we ensure that businesses have robust and secure network infrastructures in place. Our team of experts designs, implements, and manages scalable network solutions, optimizing performance and reliability to keep our clients connected and running smoothly.",
    image: "https://9xtechnology.com/assets/images/services/IT Network Services.jpg",
  },
  {
    title: "Social Media App Dev",
    description: "In the fast-paced world of social media, we understand the importance of an impactful online presence. Our skilled developers create custom social media applications that drive engagement and brand visibility. Additionally, we provide comprehensive social media management services to help businesses maintain a strong and positive online reputation.",
    image: "https://9xtechnology.com/assets/images/services/Social Media Application Development & Management.jpg",
  },
  {
    title: "Gaming Development",
    description: "With a passion for gaming, we specialize in developing captivating and immersive gaming experiences. Our talented game developers use the latest technologies to craft games for various platforms, catering to diverse audiences and creating entertainment that leaves a lasting impression.",
    image: "https://9xtechnology.com/assets/images/services/Gaming Development Services.jpg",
  },
  {
    title: "AR and VR Solutions",
    description: "Developing immersive experiences using AR and VR technologies, possibly for entertainment, training, gaming, or product visualization.",
    image: "https://9xtechnology.com/assets/images/services/AR%20and%20VR.jpg",
  },
  {
    title: "Cloud Infrastructure",
    description: "Recognizing the critical role of IT infrastructure in a technology-driven world, we provide comprehensive IT infrastructure services. From cloud computing solutions to data center management, we ensure that businesses have scalable, secure, and efficient IT setups that support their growth and operations.",
    image: "https://9xtechnology.com/assets/images/services/Digital%20Marketing.jpg",
  },
];
</script>

<style scoped>
.marketing {
  height: 700px;
  margin-left: 70px;
}
.services {
  padding: 4rem 2rem;
  text-align: center;
  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3gd1MsHDLitwcUZRTzadktJTWNkFORU7BZqIzDP3q5h669FjD');
  background-size: cover;
  background-position: center;
  position: relative;
  color: white;
}
.section-title {
  font-size: 2rem;
  margin-bottom: 2rem;
  margin-top: 200px;
  text-align: left;
  margin-left: 5%;
  color: #C79232; /* gold */


}
.carousel {
  margin-top: 2rem;
  padding-bottom: 3rem;
}
/* Default pagination dots (grey) */
.swiper-pagination-bullet {
  background: grey;
  opacity: 1;
  transition: background 0.3s;
}

/* On hover (white) */
.swiper-pagination-bullet:hover {
  background: white;
}

/* Active dot (white) */
.swiper-pagination-bullet-active {
  background: white;
}

.flip-card {
  background: transparent;
  width: 350px;
  height: 500px;
  perspective: 1000px;
  margin: auto;
}
.flip-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}
.flip-card:hover .flip-inner {
  transform: rotateY(180deg);
}
.flip-front,
.flip-back {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  backface-visibility: hidden;
  overflow: hidden;
}
.flip-front {
  background: #fff;
}
.flip-back {
    background: #00000063;
  color: #fff;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
}
.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
