<template>
  <section class="services">
      <div class="intro-section">
  <div class="intro-text">
    <h2 class="section-title">SERVICES WE’RE OFFERING</h2>
    <p class="section-para">High quality products and<br> services that we stand behind</p>
  </div>
  <img src="https://9xtechnology.com/assets/images/robo-hand.png" alt="services" class="marketing" />
</div>

  <div class="cards-container">
  <div
    v-for="(service, index) in services"
    :key="index"
    class="flip-card"
  >
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
</div>
      

</section>
</template>

<script setup>


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
  {
    title: "Trading Platform Development",
    description: "Designing and building platforms for trading various assets, including stocks, cryptocurrencies, commodities, or forex, incorporating features like trading tools, analytics, and user-friendly interfaces.",
    image: "https://9xtechnology.com/assets/images/services/Trading%20Platform%20Development.jpg",
  },
  {
    title: "Crypto & Blockchain Development",
    description: "Creating and implementing solutions using blockchain technology, such as developing cryptocurrencies, smart contracts, decentralized applications (dApps), and blockchain",
    image: "https://9xtechnology.com/assets/images/services/Crypto%20&%20Blockchain%20Development.jpg",
  },
  {
    title: "IT Infrastructure Services",
    description: "Recognizing the critical role of IT infrastructure in a technology-driven world, we provide comprehensive IT infrastructure services. From cloud computing solutions to data center management, we ensure that businesses have scalable, secure, and efficient IT setups that support their growth and operations.",
    image: "https://9xtechnology.com/assets/images/services/IT%20Infrastructure%20Services.jpg",
  },
  {
    title: "SEO (Search Engine Optimization)",
    description: "Providing strategies and techniques to improve a website's visibility in search engine results, enhancing organic traffic through keyword optimization, content creation, and technical.",
    image: "https://9xtechnology.com/assets/images/services/SEO.jpg",
  },
  {
    title: "AI-Based Services",
    description: "Leveraging Artificial Intelligence for diverse applications, which could include predictive analytics, natural language processing, recommendation systems, or machine learning-based solutions for various industries.",
    image: "https://9xtechnology.com/assets/images/services/AI-Based%20Services.jpg",
  },
  {
    title: "Trading Bots",
    description: "Creating automated trading bots that execute predefined strategies in financial markets, such as cryptocurrencies or traditional stocks, based on specific parameters and algorithms.",
    image: "https://9xtechnology.com/assets/images/services/Trading%20Bots.jpg",
  },
  {
    title: " Marketing Services via Social Media",
    description: "Our marketing experts harness the power of social media platforms to drive targeted campaigns and elevate brand awareness. By leveraging data-driven strategies, we optimize social media marketing efforts to deliver tangible results, increasing customer engagement and conversions.",
    image: "https://9xtechnology.com/assets/images/services/Marketing%20Services%20via%20Social%20Media.jpg",
  },
  {
    title: "CRM Software",
    description: "Developing Customer Relationship Management (CRM) software to manage interactions and relationships with customers, streamlining sales, marketing, and customer service processes.",
    image: "https://9xtechnology.com/assets/images/services/CRM%20Software.jpg",
  },
];
</script>

<style scoped>
.intro-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  flex-wrap: wrap;
  gap: 2rem;
}

.intro-text {
  flex: 1;
  min-width: 280px;
  color: white;
}

.marketing {
  flex: 1;
  max-width: 500px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 768px) {
  .intro-section {
    flex-direction: column;
    text-align: center;
  }

  .marketing {
    max-width: 100%;
  }

  .section-title {
    margin-top: 1rem;
  }
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
  margin-bottom: 1rem;
  margin-top: 20px;
  text-align: left;
  margin-left: 15%;
  color: #C79232; /* gold */
}
.section-para{
  font-size: 2rem;
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
.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 2rem 1rem;
  margin-top: 2rem;
}

/* Responsive Fixes */
@media (max-width: 992px) {
  .swiper {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .flip-card {
    width: 90%;
    height: 420px;
  }
  .marketing {
    height: auto;
    width: 100%;
    margin: 0 auto;
  }
  .section-title {
    font-size: 1.8rem;
    margin-left: 0;
    text-align: center;
  }
  .cards-container {
    flex-direction: column;
    align-items: center;
  }
 
}
</style>
