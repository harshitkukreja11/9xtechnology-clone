<template>
  <section class="hero">
    <div class="hero-content">
      <div class="hero-text">
        <h1>EMPOWER YOUR<br><span>BUSINESS</span>  WITH<br> <span>TECHNOLOGY</span></h1>
        <p>FROM IDEA TO IMPLEMENTATION - WE<br> MAKE IT HAPPEN</p>
        <button class="load-more">Load More</button><br>
        <img
          src="https://9xtechnology.com/assets/images/scroll-down.png"
          alt="Scroll Down"
          class="scroll-image"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero{
  padding: 4rem 2rem;
  text-align: center;
  background-image: url('https://cdn.prod.website-files.com/67444bdb9c312e239038aa41/676438bba4190bc334f44a43_automated%20routing.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  color: white;
}

.hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.hero > * {
  position: relative;
  z-index: 2;
}


.hero-content {
  max-width: 1200px;
  margin: auto;
  width: 100%;
}

.hero-text {
  max-width: 600px;
  text-align: left;
}

.hero h1 {
  font-size: 3.7rem;
  margin-bottom: 0.5rem;
  font-weight: bolder;
  
}

.hero p {
  font-size: 1.6rem;
  margin-bottom: 2rem;
  font-weight: bold;
}
.hero span{
    color: #C79232; /* gold */

}

.load-more {
  padding: 10px 24px;
  background-color: #C79232; /* gold */
  border: none;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
}

.load-more:hover {
  background-color: #e6c200;
}

.scroll-image {
  margin-top: 2rem;
  width: 40px;
}
</style>
