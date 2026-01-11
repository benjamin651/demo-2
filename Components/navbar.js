class BluepeakNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: sticky;
          top: 0;
          z-index: 50;
          background-color: white;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
        }

        .nav-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: #2E8B57;
          display: flex;
          align-items: center;
          font-family: 'Poppins', sans-serif;
          text-decoration: none;
        }

        .logo-icon {
          margin-right: 0.5rem;
          color: #4682B4;
        }

        .nav-links {
          display: none;
        }

        .nav-link {
          color: #374151;
          font-weight: 500;
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
          transition: all 0.3s ease;
          font-family: 'Poppins', sans-serif;
          text-decoration: none;
        }

        .nav-link:hover {
          color: #2E8B57;
          background-color: #F0FDF4;
        }

        .quote-btn {
          background-color: #2E8B57;
          color: white;
          font-weight: 500;
          padding: 0.5rem 1.5rem;
          border-radius: 0.375rem;
          transition: all 0.3s ease;
          font-family: 'Poppins', sans-serif;
          text-decoration: none;
          display: inline-block;
        }

        .quote-btn:hover {
          background-color: #267548;
        }

        /* Hamburger button */
        .mobile-menu-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border: none;
          background: transparent;
          border-radius: 10px;
          cursor: pointer;
        }

        .mobile-menu-btn:hover {
          background: rgba(0,0,0,0.05);
        }

        .hamburger {
          width: 22px;
          height: 16px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .hamburger span {
          display: block;
          height: 2px;
          width: 100%;
          background: #374151;
          border-radius: 999px;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        /* Animate to X when open */
        .mobile-menu-btn.open .hamburger span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }
        .mobile-menu-btn.open .hamburger span:nth-child(2) {
          opacity: 0;
        }
        .mobile-menu-btn.open .hamburger span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        /* Mobile menu */
        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background-color: white;
          padding: 1rem;
          box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
          display: none;
        }

        .mobile-menu.open {
          display: block;
        }

        .mobile-link {
          display: block;
          padding: 0.75rem 0;
          color: #374151;
          border-bottom: 1px solid #E5E7EB;
          font-family: 'Poppins', sans-serif;
          text-decoration: none;
        }

        .mobile-link:last-child {
          border-bottom: none;
        }

        .mobile-link:hover {
          color: #2E8B57;
        }

        .mobile-cta {
          margin-top: 1rem;
          text-align: center;
          width: 100%;
        }

        @media (min-width: 768px) {
          .nav-links {
            display: flex;
            align-items: center;
            gap: 1rem;
          }

          .mobile-menu-btn {
            display: none;
          }

          .mobile-menu {
            display: none !important;
          }
        }
      </style>

      <div class="nav-container">
        <a href="index.html" class="logo">
          <i data-feather="home" class="logo-icon"></i>
          BluePeak Lawn Care
        </a>

        <div class="nav-links">
          <a href="index.html" class="nav-link">Home</a>
          <a href="services.html" class="nav-link">Services</a>
          <a href="gallery.html" class="nav-link">Gallery</a>
          <a href="testimonials.html" class="nav-link">Testimonials</a>
          <a href="about.html" class="nav-link">About</a>
          <a href="contact.html" class="quote-btn">Get a Free Quote</a>
        </div>

        <button class="mobile-menu-btn" aria-label="Open menu" aria-expanded="false">
          <div class="hamburger" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <div class="mobile-menu" role="menu">
          <a href="index.html" class="mobile-link">Home</a>
          <a href="services.html" class="mobile-link">Services</a>
          <a href="gallery.html" class="mobile-link">Gallery</a>
          <a href="testimonials.html" class="mobile-link">Testimonials</a>
          <a href="about.html" class="mobile-link">About</a>
          <a href="contact.html" class="quote-btn mobile-cta">Get a Free Quote</a>
        </div>
      </div>
    `;

    // Feather icons (logo)
    if (window.feather) feather.replace();

    const menuBtn = this.shadowRoot.querySelector(".mobile-menu-btn");
    const mobileMenu = this.shadowRoot.querySelector(".mobile-menu");

    const closeMenu = () => {
      mobileMenu.classList.remove("open");
      menuBtn.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    };

    menuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = mobileMenu.classList.toggle("open");
      menuBtn.classList.toggle("open", isOpen);
      menuBtn.setAttribute("aria-expanded", String(isOpen));
    });

    // Close when clicking anywhere outside the menu
    document.addEventListener("click", (e) => {
      // If the click is NOT inside this component, close
      if (!this.contains(e.target)) closeMenu();
    });

    // Close after clicking a link (nice UX)
    this.shadowRoot.querySelectorAll(".mobile-menu a").forEach((link) => {
      link.addEventListener("click", () => closeMenu());
    });
  }
}

customElements.define("bluepeak-navbar", BluepeakNavbar);
