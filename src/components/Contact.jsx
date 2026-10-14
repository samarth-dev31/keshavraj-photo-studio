
import { ArrowUpRight } from "lucide-react";
import "./Contact.css";

const WHATSAPP_NUMBER = "919022892212";

const WHATSAPP_LOGO =
  "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg";

const whatsappMessage =
  "Hello Keshavraj Photo Studio! I would like to enquire about a photography session.";

const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  whatsappMessage
)}`;

const mapsLink =
  "https://www.google.com/maps/search/?api=1&query=Chhatrapati+Shivaji+Maharaj+Chowk%2C+Wadwani%2C+Beed%2C+Maharashtra%2C+India";

export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <>
      <section
        className="contact-section section"
        id="contact"
      >
        <div className="container">
          <div className="contact-panel">
            <span className="section-label contact-label">
              LET'S CREATE SOMETHING MEANINGFUL
            </span>

            <h2 className="contact-title">
              Your moments.
              <br />
              Our <em>perspective.</em>
            </h2>

            <p className="contact-description">
              Every special moment deserves to be
              remembered. Let's talk about your
              photography session and create
              something beautiful together.
            </p>

            <a
              className="contact-whatsapp-button"
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={WHATSAPP_LOGO}
                alt=""
                width="27"
                height="27"
              />

              <span>ENQUIRE ON WHATSAPP</span>

              <ArrowUpRight size={22} />
            </a>

            
<div className="contact-address">
  <span className="contact-address-label">
    VISIT OUR STUDIO
  </span>

  <p>
    Chhatrapati Shivaji Maharaj Chowk
    <br />
    Wadwani, District Beed
    <br />
    Maharashtra, India
  </p>

  <div className="contact-phone">
    <span className="contact-address-label">
      CALL US
    </span>

    <p>
      <a href="tel:+919022892212">
        +91 90228 92212
      </a>
    </p>
  </div>
</div>


            <p className="contact-note">
              KIDS PORTRAITS
              <span> · </span>
              MATERNITY
              <span> · </span>
              MEANINGFUL MEMORIES
            </p>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-main">
            <a
              className="footer-brand"
              href="#home"
              aria-label="Keshavraj Photo Studio home"
            >
              <span className="footer-monogram">K</span>

              <span className="footer-brand-text">
                <strong>KESHAVRAJ</strong>
                <small>PHOTO STUDIO</small>
              </span>
            </a>

            <p className="footer-tagline">
              Moments become memories.
              <br />
              Photographs keep them close.
            </p>

            <nav
              className="footer-nav"
              aria-label="Footer navigation"
            >
              <a href="#home">Home</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#services">Services</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>

          <div className="footer-bottom">
            <p className="footer-copyright">
              © {year} Keshavraj Photo Studio.
              <br className="footer-mobile-break" />
              {" "}All rights reserved.
            </p>

            <p className="footer-credit">
              Crafted by{" "}
              <span>Nebula Studio</span>
            </p>

            <a
              className="footer-top-link"
              href="#home"
            >
              BACK TO TOP ↑
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
