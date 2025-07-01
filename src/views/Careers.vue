<template>
  <!-- Background Section with Title and Banner -->
  <section class="services">
    <div class="intro-section">
      <div class="intro-text">
        <h2 class="section-title">Shape the Future: Explore Career Opportunities at 9X Technology</h2>
        <p class="section-para">
          Join a Dynamic Team Driving Innovation and Transforming Industries<br><br>
          Embark on a journey of innovation and growth with 9X Technology. Discover exciting career opportunities that allow you to make a difference, collaborate with top talent, and drive meaningful impact. Explore our current openings and take the next step towards shaping the future of technology.
        </p>
      </div>
      <img src="https://9xtechnology.com/assets/images/career.jpg" alt="projects" class="marketing" />
    </div>
  </section>

  <!-- Contact Section -->
  <section class="contact-section">
    <div class="contact-container">
      <!-- Left Card -->
      <div class="contact-card left-card" style="max-width: 200px;">
        <h2 class="left-title">WANT TO JOIN<br>Get in touch with us</h2>

        <!-- Email -->
        <div class="info-row">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdTc0h6t5UJP8PYGNBkcupZS6mVxkn_oGgdgIo6Tx5moDotvdr" alt="Mail Icon" class="icon-img">
          <p><strong>Drop your resume here</strong><br>hr@9xtechnology.com</p>
        </div>

        <!-- Phone -->
        <div class="info-row">
          <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5kA-AdN-QeMtLn5fTtrjm8GehG_ijKMb_zJylOmyuFohPmCJy" alt="Phone Icon" class="icon-img">
          <div>
            <p><strong>Call us:</strong></p>
            <ul class="phone-list">
              <li>UAE: +971 4529 8757</li>
              <li>UAE: +971 5228 0076</li>
              <li>India: +91 7502 6777 77</li>
            </ul>
          </div>
        </div>

        <!-- Address -->
        <div class="info-row">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkEY0nAoOr-q6PSagANwG5dJs4h1n6k4HAvvu7_aBvB_kmgncu" alt="Location Icon" class="icon-img">
          <p><strong>Headquarter:</strong><br>
            2020 Building - 108 - Al<br> Quoz 3 - Dubai
          </p>
        </div>

        <button class="submit-btn find-btn">Find Us On Google</button>
      </div>

      <!-- Right Card -->
      <div class="contact-card right-card">
        <h1>Write Us</h1>
        <form>
          <div class="form-group">
            <input type="text" placeholder="Name" required />
            <input type="text" placeholder="Mobile Number" required />
          </div>
          <div class="form-group">
            <input type="email" placeholder="Email Address" required />
            <input type="text" placeholder="Apply For" required />
          </div>
          <div class="form-group">
            <input type="file" />
          </div>
          <div class="form-group">
            <textarea placeholder="Message"></textarea>
          </div>
          <button type="submit" class="submit-btn form-submit">Submit</button>
        </form>
      </div>
    </div>
  </section>
</template>
<style scoped>
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
  font-weight: 500;
}

.marketing {
  flex: 1;
  max-width: 500px;
  width: 100%;
  height: auto;
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
  color: #C79232;
  margin-bottom: 2rem;
  padding-left: 0;
  text-align: center;
}

.left-card .left-title {
  padding-left: 50px;
  font-size: 1.4rem;
  color: #C79232;
}

.icon-img {
  width: 70px;
  height: 70px;
}

.info-row {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-top: 1rem;
}

.phone-list {
  list-style: none;
  padding-left: 0;
  margin: 0;
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

.submit-btn {
  background-color: #C79232;
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s ease;
}

.submit-btn:hover {
  background-color: #a8731e;
}

.find-btn {
  margin-top: 1.5rem;
  margin-left: 50px;
  width: 250px;
}

.form-submit {
  margin-left: auto;
  margin-right: auto;
  display: block;
  width: 170px;
  border: 2px solid black;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .intro-section {
    flex-direction: column;
    text-align: center;
  }

  .intro-text {
    margin-left: 0;
  }

  .section-title,
  .section-para {
    text-align: center;
  }

  .contact-container {
    flex-direction: column;
    align-items: stretch;
  }

  .left-title {
    padding-left: 0 !important;
    text-align: center;
  }

  .info-row {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .icon-img {
    width: 50px;
    height: 50px;
  }

  .find-btn {
    width: 80%;
    margin: 2rem auto 0;
  }

  .form-submit {
    margin-left: auto;
    margin-right: auto;
  }

  form .form-group {
    flex-direction: column;
  }

  form .form-group input,
  form .form-group textarea {
    width: 100%;
  }
}
</style>