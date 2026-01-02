class BluepeakFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: #1F2937;
                    color: #F3F4F6;
                }
                
                .footer-container {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 3rem 1rem;
                }
                
                .footer-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 2rem;
                }
                
                .footer-logo {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: white;
                    display: flex;
                    align-items: center;
                    margin-bottom: 1rem;
                }
                
                .footer-logo-icon {
                    margin-right: 0.5rem;
                    color: #60A5FA;
                }
                
                .footer-tagline {
                    color: #9CA3AF;
                    margin-bottom: 1rem;
                }
                
                .footer-heading {
                    font-size: 1.125rem;
                    font-weight: 600;
                    color: white;
                    margin-bottom: 1rem;
                }
                
                .footer-links {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }
                
                .footer-link {
                    color: #9CA3AF;
                    transition: color 0.3s ease;
                }
                
                .footer-link:hover {
                    color: white;
                }
                
                .contact-info {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }
                
                .contact-item {
                    display: flex;
                    align-items: center;
                    color: #9CA3AF;
                }
                
                .contact-icon {
                    margin-right: 0.75rem;
                    color: #60A5FA;
                }
                
                .copyright {
                    border-top: 1px solid #374151;
                    padding-top: 2rem;
                    margin-top: 2rem;
                    text-align: center;
                    color: #9CA3AF;
                }
                
                @media (min-width: 768px) {
                    .footer-grid {
                        grid-template-columns: repeat(4, 1fr);
                    }
                }
            </style>
            
            <div class="footer-container">
                <div class="footer-grid">
                    <div>
                        <div class="footer-logo">
                            <i data-feather="home" class="footer-logo-icon"></i>
                            BluePeak
                        </div>
                        <p class="footer-tagline">Reliable. Professional. Built to Last.</p>
                        <div class="flex gap-4">
                            <a href="#" class="text-gray-400 hover:text-white">
                                <i data-feather="facebook"></i>
                            </a>
                            <a href="#" class="text-gray-400 hover:text-white">
                                <i data-feather="instagram"></i>
                            </a>
                            <a href="#" class="text-gray-400 hover:text-white">
                                <i data-feather="twitter"></i>
                            </a>
                        </div>
                    </div>
                    
                    <div>
                        <h3 class="footer-heading">Quick Links</h3>
                        <div class="footer-links">
                            <a href="index.html" class="footer-link">Home</a>
                            <a href="services.html" class="footer-link">Services</a>
                            <a href="gallery.html" class="footer-link">Gallery</a>
                            <a href="testimonials.html" class="footer-link">Testimonials</a>
                            <a href="about.html" class="footer-link">About Us</a>
                            <a href="contact.html" class="footer-link">Contact</a>
                        </div>
                    </div>
                    
                    <div>
                        <h3 class="footer-heading">Services</h3>
                        <div class="footer-links">
                            <a href="services.html" class="footer-link">Lawn Mowing</a>
                            <a href="services.html" class="footer-link">Seasonal Cleanup</a>
                            <a href="services.html" class="footer-link">Hedge Trimming</a>
                            <a href="services.html" class="footer-link">Property Maintenance</a>
                        </div>
                    </div>
                    
                    <div>
                        <h3 class="footer-heading">Contact Us</h3>
                        <div class="contact-info">
                            <div class="contact-item">
                                <i data-feather="map-pin" class="contact-icon"></i>
                                <span>123 Green Valley, Suburbia</span>
                            </div>
                            <div class="contact-item">
                                <i data-feather="phone" class="contact-icon"></i>
                                <span>(555) 123-4567</span>
                            </div>
                            <div class="contact-item">
                                <i data-feather="mail" class="contact-icon"></i>
                                <span>info@bluepeaklawn.com</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="copyright">
                    <p>&copy; ${new Date().getFullYear()} BluePeak Lawn & Property Care. All rights reserved.</p>
                </div>
            </div>
        `;
    }
}

customElements.define('bluepeak-footer', BluepeakFooter);