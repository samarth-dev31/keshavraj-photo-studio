
import { useState } from "react";
import { ArrowDownRight, ArrowUpRight, Menu, X } from "lucide-react";
import "./Navbar.css";

const WHATSAPP_NUMBER = "919022892212";

const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hello Keshavraj Photo Studio! I would like to enquire about your photography services."
)}`;

const NAV_LINKS = [
  { label: "Home", href: "#home", number: "01" },
  { label: "Portfolio", href: "#portfolio", number: "02" },
  { label: "Services", href: "#services", number: "03" },
  { label: "Our Story", href: "#about", number: "04" },
  { label: "Contact", href: "#contact", number: "05" },
];

function WhatsAppLogo({ className = "" }) {
  return (
    <img
      className={className}
      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
      alt=""
      aria-hidden="true"
    />
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="navbar-shell">
        <a
          className="navbar-brand"
          href="#home"
          aria-label="Keshavraj Photo Studio home"
          onClick={closeMenu}
        >
          <span className="navbar-monogram" aria-hidden="true">
            <span>K</span>
            <span className="navbar-monogram-dot">.</span>
          </span>

          <span className="navbar-brand-copy">
            <span className="navbar-brand-name">Keshavraj</span>
            <span className="navbar-brand-subtitle">
              <span className="navbar-brand-rule" />
              PHOTO STUDIO
              <span className="navbar-brand-rule" />
            </span>
          </span>
        </a>

        <nav className="navbar-links" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.number}
              href={link.href}
              className="navbar-link"
            >
              <span>{link.label}</span>
              <span className="navbar-link-number">{link.number}</span>
            </a>
          ))}
        </nav>

        <a
          className="navbar-whatsapp"
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="navbar-whatsapp-icon">
            <WhatsAppLogo className="navbar-whatsapp-logo" />
          </span>

          <span className="navbar-whatsapp-copy">
            <span className="navbar-whatsapp-label">LET&apos;S TALK</span>
            <span className="navbar-whatsapp-title">WhatsApp Us</span>
          </span>

          <ArrowUpRight
            className="navbar-whatsapp-arrow"
            size={17}
            strokeWidth={1.7}
          />
        </a>

        <button
          className={`navbar-menu-toggle ${menuOpen ? "is-open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <X size={24} strokeWidth={1.5} />
          ) : (
            <Menu size={24} strokeWidth={1.5} />
          )}
        </button>
      </div>

      <div className={`navbar-mobile-panel ${menuOpen ? "is-open" : ""}`}>
        <div className="navbar-mobile-heading">
          <span>EXPLORE THE STUDIO</span>
          <span className="navbar-mobile-heading-line" />
        </div>

        <nav
          id="mobile-navigation"
          className="navbar-mobile-links"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.number}
              href={link.href}
              className="navbar-mobile-link"
              onClick={closeMenu}
            >
              <span className="navbar-mobile-number">{link.number}</span>
              <span className="navbar-mobile-link-label">{link.label}</span>
              <ArrowDownRight size={19} strokeWidth={1.4} />
            </a>
          ))}
        </nav>

        <a
          className="navbar-mobile-whatsapp"
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          <WhatsAppLogo className="navbar-mobile-whatsapp-logo" />
          <span>Start a conversation</span>
          <ArrowUpRight size={19} />
        </a>

        <p className="navbar-mobile-footer">
          EVERY FRAME. EVERY EMOTION. FOREVER YOURS.
        </p>
      </div>
    </header>
  );
}
