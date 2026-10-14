
import {
  ArrowDownRight,
  Camera,
  Heart,
  Sparkles,
  Users,
} from "lucide-react";
import "./Services.css";

const services = [
  {
    number: "01",
    title: "Kids Photography",
    description:
      "Little expressions, big personalities, and childhood memories captured beautifully.",
    icon: Sparkles,
    tag: "CHILDHOOD, PRESERVED",
  },
  {
    number: "02",
    title: "Maternity Photography",
    description:
      "Elegant portraits celebrating motherhood, connection, and a beautiful new beginning.",
    icon: Heart,
    tag: "A BEAUTIFUL BEGINNING",
  },
  {
    number: "03",
    title: "Portrait Photography",
    description:
      "Thoughtfully crafted portraits that reflect your personality and individual style.",
    icon: Camera,
    tag: "YOUR STORY, YOUR WAY",
  },
  {
    number: "04",
    title: "Family Photography",
    description:
      "Timeless photographs celebrating the people and moments that matter most.",
    icon: Users,
    tag: "TOGETHER, ALWAYS",
  },
];

const WHATSAPP_NUMBER = "919022892212";

export default function Services() {
  const message =
    "Hello Keshavraj Photo Studio! I would like to enquire about your photography services.";

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <section className="services-section section" id="services">
      <div className="container">
        <div className="services-heading">
          <div className="services-intro">
            <span className="section-label">
              WHAT WE DO
            </span>

            <h2 className="section-title">
              Every moment
              <br />
              deserves <em>to be remembered.</em>
            </h2>
          </div>

          <p className="services-heading-description">
            More than photographs, we create lasting
            memories with care, creativity, and an
            eye for the details that make every story
            unique.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                className="service-card"
                key={service.number}
              >
                <div className="service-card-top">
                  <span className="service-number">
                    {service.number}
                  </span>

                  <span className="service-icon">
                    <Icon size={23} strokeWidth={1.4} />
                  </span>
                </div>

                <div className="service-card-content">
                  <span className="service-tag">
                    {service.tag}
                  </span>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>
                </div>

                <a
                  className="service-card-link"
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Enquire about ${service.title} on WhatsApp`}
                >
                  <span>ENQUIRE ON WHATSAPP</span>
                  <ArrowDownRight size={19} />
                </a>
              </article>
            );
          })}
        </div>

        <div className="services-bottom">
          <p>
            Have something special in mind?
            <br />
            <span>Let's create something memorable.</span>
          </p>

          <a
            className="button"
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
          >
            Discuss Your Shoot
            <ArrowDownRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
