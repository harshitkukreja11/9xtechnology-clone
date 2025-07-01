<template>
  <!-- Background Section with Title and Banner -->
  <section class="services">
    <div class="intro-section">
      <div class="intro-text">
        <h2 class="section-title">Empowering Innovation:<br> Welcome to 9X Technology</h2>
        <p class="section-para">Transforming Ideas into Reality with Cutting-Edge Solutions<br><br>
At 9X Technology, we lead the charge in innovation, crafting transformative solutions that redefine industries. Explore our diverse expertise in software development, AI, machine learning, and more. Join us on a journey where possibilities are limitless and ideas shape the future.</p>
      </div>
      <img src="https://9xtechnology.com/assets/images/contact-us.jpg" alt="projects" class="marketing" />
    </div>
  </section>

  <!-- Contact Section -->
  <section class="contact-section">
    <div class="contact-container">
    <!-- Left Card -->
<div class="contact-card left-card" style="margin-top: 5%;">

  <h2 style="padding-right: 30%;">Contact us<br>
OR NEED ANY HELP?</h2>

  <!-- Email Section -->
  <div style="display: flex; align-items: center; gap: 0.5rem; margin-top: 1rem;">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdTc0h6t5UJP8PYGNBkcupZS6mVxkn_oGgdgIo6Tx5moDotvdr" alt="Mail Icon" style="width: 100px; height: 100px;">
    <p><strong> Mail us </strong><br> info@9xtechnology.com</p>
  </div>

  <!-- Phone Section -->
  <div style="display: flex; align-items: flex-start; gap: 0.5rem; margin-top: 1rem;">
    <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5kA-AdN-QeMtLn5fTtrjm8GehG_ijKMb_zJylOmyuFohPmCJy" alt="Phone Icon" style="width: 100px; height: 100px;">
    <div>
      <p><strong>Call us:</strong></p>
      <ul class="phone-list">
        <li>UAE: +971 4529 8757</li>
        <li>UAE: +971 5228 0076</li>
        <li>India: +91 7502 6777 77</li>
      </ul>
    </div>
  </div>

  <!-- Address Section -->
  <div style="display: flex; align-items: flex-start; gap: 0.5rem; margin-top: 1rem;">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkEY0nAoOr-q6PSagANwG5dJs4h1n6k4HAvvu7_aBvB_kmgncu" alt="Location Icon" style="width: 100px; height: 100px;">
    <p><strong>Headquarter:</strong><br>
      2020 Building - 108 - Al<br> Quoz 3 - Dubai
    </p>
  </div>

  <button type="submit" class="submit-btn" style="margin-top: 1rem;margin-left: 50px;width:250px ;">Find Us On Google</button>
 <!-- india Address Section -->
  <div style="display: flex; align-items: flex-start; gap: 0.5rem; margin-top: 1rem;">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkEY0nAoOr-q6PSagANwG5dJs4h1n6k4HAvvu7_aBvB_kmgncu" alt="Location Icon" style="width: 100px; height: 100px;">
    <p><strong>India Office</strong><br>
     401, 4th Floor, Gowra Fountain Head, HUDA Techno Enclave, HITEC City, Hyderabad, Telangana 500081, India
    </p>
  </div>

  <button type="submit" class="submit-btn" style="margin-top: 1rem;margin-left: 50px;width:250px ;">Find Us On Google</button>
  <!-- Social Icons -->
<div class="social-icons">
  <a href="https://www.facebook.com/" target="_blank" aria-label="Facebook" class="icon-button">
    <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" />
  </a>
  <a href="https://www.linkedin.com/" target="_blank" aria-label="LinkedIn" class="icon-button">
    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
  </a>
</div>

</div>

      

      <!-- Right Card -->
      <div class="contact-card right" style="margin-top: 20%; background-color:black ;  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
   overflow: hidden;
height: 500px;">
        <h1>Write  Us</h1>
        <form>
          <div class="form-group">
            
            <input type="text" placeholder="Name" required />
            <input type="text" placeholder="Phone" required />
          </div>
          <div class="form-group">
            <input type="email" placeholder="Email " required />
            <input type="text" placeholder="Subject" required />
          </div>
          <div class="form-group">
            <textarea placeholder="Message (optional)"></textarea>
          </div>
          <button type="submit" class="submit-btn" style="margin-left: 100px; border: 2px solid black; width: 170px;">Submit</button>
          
        </form>
        
      </div>
   

      
    </div>
       <!-- Google Maps Embed -->
<!-- Map Section -->
<div class="map-wrapper">
  <h2 class="map-title">Find us on map</h2>
  <div class="map-container">
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.1511613015466!2d55.23316147497163!3d25.1346754316648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69a0f89afc4b%3A0x79fc3365b9fef046!2s9X%20Technology!5e0!3m2!1sen!2sin!4v1719312289876!5m2!1sen!2sin" 
      width="100%" 
      height="350" 
      style="border:0;" 
      allowfullscreen="true" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade">
    </iframe>
  </div>
</div>

  </section>
</template>





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
  font-size: 1.6rem;
  text-align: left;
  font-weight: 5;
}

.marketing {
  flex: 1;
  max-width: 500px;
  width: 100%;
  height: auto;
  margin: 0 auto;
  border-radius: 8px;
}
.contact-section {
  background-color: #f8f8f8;
  padding: 4rem 2rem;
  
}

.contact-container {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: auto;
  justify-content: space-between;
}

.contact-card {
  background: white;
  border: 1px solid #ccc;
  padding: 2rem;
  border-radius: 8px;
  flex: 1;
  min-width: 300px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.contact-card h1 {
  margin-bottom: 3rem;
  padding-left: 50px;
  font-size: xx-large;
}

.contact-card.left ul {
  list-style: none;
  padding: 0;
  margin-top: 1rem;
}

.contact-card.left li {
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

form .form-group {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
}

form .form-group input,
form .form-group textarea {
  flex: 1;
  min-width: 45%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

form .form-group textarea {
  width: 100%;
  min-height: 120px;
}


/* Responsive */
@media (max-width: 768px) {
  .form-group {
    flex-direction: column;
  }
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





.left-card {
  flex: 0 0 15%;
  font-size: 0.95rem;
  line-height: 1.6;
  color: #333;
}

.left-card h3 {
  color: #C79232;
  margin: 0.5rem 0;
  font-size: 1.2rem;
}

.left-card h4 {
  color: #111;
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 0.3rem;

}

.left-card p,
.left-card li {
  margin-bottom: 0.6rem;
}

.left-card ul.phone-list {
  list-style: none;
  padding-left: 0;
}

.left-card ul li {
  margin-left: 0;
  padding-left: 1.2rem;
  position: relative;
}

.right-card {
  flex: 0 0 60%;
}

form .form-group {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
}

form .form-group input,
form .form-group textarea {
  flex: 1;
  min-width: 45%;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

form .form-group textarea {
  width: 100%;
  min-height: 120px;
}

.submit-btn {
  background-color: #C79232;
  color: white;
  padding: 0.8rem 1.5rem;
  border: 2px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s ease;
}

.submit-btn:hover {
  background-color: #a8731e;
}
.contact-section{
  padding: 2rem;
  text-align: center;
  background-image: url('https://www.shutterstock.com/shutterstock/videos/1064278558/thumb/12.jpg?ip=x480');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  color: white;
}

.contact-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(0, 0, 0, 0.6);
}

.contact-section > * {
  position: relative;
  z-index: 2;
}
/* Responsive */
@media (max-width: 768px) {
  .contact-container {
    flex-direction: column;
    align-items: stretch;
  }

  .left-card,
  .right-card {
    flex: 1 1 100%;
  }

  form .form-group {
    flex-direction: column;
  }

  form .form-group input,
  form .form-group textarea {
    width: 100%;
  }
}
.social-icons {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
}

.icon-button {
  display: inline-block;
  background-color: #C79232;
  padding: 0.5rem;
  border-radius: 20%;
  transition: background-color 0.3s ease;
}

.icon-button img {
  width: 24px;
  height: 24px;
}

.icon-button:hover {
  background-color: #a8731e; /* Slightly darker gold on hover */
}
.map-wrapper {
  max-width: 1100px;
  margin: 3rem auto;
  text-align: center;
border: 1px solid white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  padding: 1%;
}

.map-title {
  font-size: 1.8rem;
  margin-bottom: 2rem;
  font-weight: bold;
}


</style>