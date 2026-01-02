class BluepeakNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    position: sticky;
                    top: 0;
                    z-index: 50;
                    background-color: white;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                }
                
                .nav-container {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 1rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .logo {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #2E8B57;
                    display: flex;
                    align-items: center;
                    font-family: 'Poppins', sans-serif;
                }
.logo-icon {
                    margin-right: 0.5rem;
                    color: #4682B4;
                }
                
                .nav-links {
                    display: none;
                }
                
                .mobile-menu-btn {
                    display: block;
                }
                .nav-link {
                    color: #374151;
                    font-weight: 500;
                    padding: 0.5rem 1rem;
                    border-radius: 0.375rem;
                    transition: all 0.3s ease;
                    font-family: 'Poppins', sans-serif;
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
                }
.quote-btn:hover {
                    background-color: #267548;
                }
                
                .mobile-menu {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    background-color: white;
                    padding: 1rem;
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
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
                }
.mobile-link:last-child {
                    border-bottom: none;
                }
                
                .mobile-link:hover {
                    color: #2E8B57;
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
                
                <button class="mobile-menu-btn p-2 rounded-md text-gray-700 hover:text-primary-500">
                    <i data-feather="menu"></i>
                </button>
            </div>
            
            <div class="mobile-menu">
                <a href="index.html" class="mobile-link">Home</a>
                <a href="services.html" class="mobile-link">Services</a>
                <a href="gallery.html" class="mobile-link">Gallery</a>
                <a href="testimonials.html" class="mobile-link">Testimonials</a>
                <a href="about.html" class="mobile-link">About</a>
                <a href="contact.html" class="block mt-4 text-center quote-btn">Get a Free Quote</a>
</div>
        `;
        
        // Add mobile menu toggle functionality
        const menuBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
        const mobileMenu = this.shadowRoot.querySelector('.mobile-menu');
        
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
            const icon = menuBtn.querySelector('i');
            if (mobileMenu.classList.contains('open')) {
                icon.setAttribute('data-feather', 'x');
            } else {
                icon.setAttribute('data-feather', 'menu');
            }
            feather.replace();
        });
    }
}

customElements.define('bluepeak-navbar', BluepeakNavbar);