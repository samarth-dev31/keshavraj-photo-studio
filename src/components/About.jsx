
import { ArrowDownRight, Camera, Heart, Sparkles } from "lucide-react";
import "./About.css";

const WHATSAPP_NUMBER = "919022892212";

export default function About() {
  const message =
    "Hello Keshavraj Photo Studio! I would like to know more about your photography.";

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <section className="about-section section" id="about">
      <div className="container">
        <div className="about-layout">
          <div className="about-visual">
            <div className="about-image-frame">
              <img
                src="/images/studio-portrait.jpeg"
                alt="Photographer at Keshavraj Photo Studio"
                loading="lazy"
              />

              <div className="about-image-caption">
                <span className="about-caption-line" />
                <span>THE ART OF PRESERVING MOMENTS</span>
              </div>
            </div>

            <div className="about-image-accent" aria-hidden="true">
              <Camera size={27} strokeWidth={1.2} />
            </div>

            <span className="about-vertical-text">
              KESHAVRAJ PHOTO STUDIO
            </span>
          </div>

          <div className="about-content">
            <span className="section-label">
              A LITTLE ABOUT US
            </span>

            <h2 className="section-title about-title">
              Behind every frame,
              <br />
              there is a <em>feeling.</em>
            </h2>

            <p className="about-lead">
              Photography is more than capturing what
              we see. It is about preserving what we
              feel.
            </p>

            <p className="about-description">
              At Keshavraj Photo Studio, every photograph
              is an opportunity to preserve a meaningful
              moment. From the little expressions of
              childhood to the beautiful journey of
              motherhood, the aim is to create images
              that feel personal, timeless, and worth
              returning to.
            </p>

            <p className="about-description">
              With thoughtful compositions, careful
              attention to detail, and a love for visual
              storytelling, each session is approached
              with the intention of making every frame
              matter.
            </p>

            <div className="about-values">
              <div className="about-value">
                <span className="about-value-icon">
                  <Heart size={19} strokeWidth={1.4} />
                </span>

                <div>
                  <h3>Genuine Moments</h3>
                  <p>Expressions that feel natural.</p>
                </div>
              </div>

              <div className="about-value">
                <span className="about-value-icon">
                  <Sparkles size={19} strokeWidth={1.4} />
                </span>

                <div>
                  <h3>Thoughtful Details</h3>
                  <p>Care in every frame.</p>
                </div>
              </div>
            </div>

            <a
              className="button about-cta"
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
            >
              Let's Create Together
              <ArrowDownRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
