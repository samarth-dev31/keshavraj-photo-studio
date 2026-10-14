
import { ArrowRight } from "lucide-react";
import "./Hero.css";

const WHATSAPP_NUMBER = "919022892212";

const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hello Keshavraj Photo Studio! I would like to enquire about a photography session."
)}`;

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-atmosphere" aria-hidden="true" />

      <div className="hero-inner container">
        <div className="hero-copy">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-line" />
            <span>KESHAVRAJ PHOTO STUDIO</span>
          </div>

          <p className="hero-kicker">THE ART OF PRESERVING MOMENTS</p>

          <h1 className="hero-heading">
            MORE THAN
            <br />
            JUST PHOTOS<span className="hero-period">.</span>
            <span className="hero-heading-script">
              It&apos;s your story.
            </span>
          </h1>

          <p className="hero-description">
            Honest emotions. Beautiful details. Memories that last
            a lifetime. Discover photography crafted with a personal
            touch and an eye for the extraordinary.
          </p>

          <div className="hero-actions">
            <a className="hero-primary-button" href="#portfolio">
              <span>Explore Our Work</span>
              <span className="hero-button-arrow">
                <ArrowRight size={21} strokeWidth={1.6} />
              </span>
            </a>

            <a
              className="hero-whatsapp-button"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact Keshavraj Photo Studio on WhatsApp"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt=""
                className="whatsapp-logo"
              />
              <span>Enquire on WhatsApp</span>
              <ArrowRight
                className="hero-whatsapp-arrow"
                size={19}
                strokeWidth={1.6}
              />
            </a>
          </div>

          <div className="hero-signature">
            <span className="hero-signature-line" />
            <span>Real moments. Timeless stories.</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-visual-glow" aria-hidden="true" />

          <div className="hero-photo-frame">
            <div className="hero-photo-inner">
              <img
                className="hero-owner-photo"
                src="/images/studio-portrait.jpeg"
                alt="Portrait of the owner of Keshavraj Photo Studio"
                fetchPriority="high"
              />

              <div className="hero-photo-gradient" />

              <div className="hero-photo-caption">
                <span className="hero-photo-caption-label">
                  BEHIND THE LENS
                </span>
                <span className="hero-photo-caption-name">
                  ABHAY
                </span>
                <span className="hero-photo-caption-role">
                  PHOTOGRAPHER & STORYTELLER
                </span>
              </div>
            </div>
          </div>

          <div className="hero-photo-corner hero-photo-corner-top" />
          <div className="hero-photo-corner hero-photo-corner-bottom" />

          <div className="hero-photo-side-note">
            <span>VISION</span>
            <span className="hero-side-note-dot" />
            <span>CRAFT</span>
            <span className="hero-side-note-dot" />
            <span>STORY</span>
          </div>
        </div>

        <div className="hero-bottom-bar">
          <div className="hero-categories">
            <span>Portraits</span>
            <i />
            <span>Maternity</span>
            <i />
            <span>Weddings</span>
            <i />
            <span>Celebrations</span>
          </div>

          <a className="hero-bottom-link" href="#services">
            Discover Our Services
            <ArrowRight size={17} strokeWidth={1.6} />
          </a>
        </div>
      </div>
    </section>
  );
}
