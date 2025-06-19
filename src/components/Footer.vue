<template>
  <footer class="footer">
    <div class="footer-content">
      <p>
        &copy; Copyright by <span>9X Technology LLC</span>. All Rights Reserved 2023 - 2025
      </p>

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
  </footer>
</template>
<style scoped>
.footer {
  background: #f8f9fa;
  color: #0a0a0a;
  padding: 1.5rem 2rem;
  font-family: 'Segoe UI', sans-serif;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

span {
  color: #ffcc00;
  font-weight: 500;
}

.social-icons {
  display: flex;
  gap: 10px;
}

.icon-button {
  background-color: #ffcc00;
  border-radius: 12%;
  padding: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  transition: transform 0.3s ease;
}

.icon-button img {
  width: 18px;
  height: 18px;
  
}

.icon-button:hover {
  transform: scale(1.1);
}
/* Responsive Design */
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footer-text {
    text-align: center;
    font-size: 0.95rem;
  }

  .social-icons {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .footer {
    padding: 1rem;
  }

  .footer-text {
    font-size: 0.9rem;
  }

  .icon-button {
    width: 32px;
    height: 32px;
    padding: 6px;
  }

  .icon-button img {
    width: 16px;
    height: 16px;
  }
}
</style>