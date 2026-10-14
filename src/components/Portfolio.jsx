
import { useEffect, useState } from "react";
import { ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight, X } from "lucide-react";
import "./Portfolio.css";

const PHOTOS = [
  { id: 1, category: "Kids", number: "01", title: "Little Moments", src: "/images/kids/kids-1.jpeg" },
  { id: 2, category: "Maternity", number: "02", title: "A Beautiful Beginning", src: "/images/maternity/maternity-1.jpeg" },
  { id: 3, category: "Kids", number: "03", title: "Pure Joy", src: "/images/kids/kids-2.jpeg" },
  { id: 4, category: "Maternity", number: "04", title: "The Waiting Glow", src: "/images/maternity/maternity-2.jpeg" },
  { id: 5, category: "Kids", number: "05", title: "Little Personalities", src: "/images/kids/kids-3.jpeg" },
  { id: 6, category: "Maternity", number: "06", title: "A Story of Love", src: "/images/maternity/maternity-3.jpeg" },
  { id: 7, category: "Kids", number: "07", title: "Beautifully You", src: "/images/kids/kids-4.jpeg" },
  { id: 8, category: "Maternity", number: "08", title: "Before We Meet", src: "/images/maternity/maternity-4.jpeg" },
  { id: 9, category: "Kids", number: "09", title: "Tiny Wonders", src: "/images/kids/kids-5.jpeg" },
  { id: 10, category: "Maternity", number: "10", title: "Moments of Expectation", src: "/images/maternity/maternity-5.jpeg" },
  { id: 11, category: "Kids", number: "11", title: "A Little Magic", src: "/images/kids/kids-6.jpeg" },
  
  { id: 13, category: "Maternity", number: "13", title: "Made of Love", src: "/images/maternity/maternity-7.jpeg" },
];

const FILTERS = ["All Work", "Kids", "Maternity"];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All Work");
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const visiblePhotos =
    activeFilter === "All Work"
      ? PHOTOS
      : PHOTOS.filter((photo) => photo.category === activeFilter);

  const selectedIndex = visiblePhotos.findIndex(
    (photo) => photo.id === selectedPhoto?.id
  );

  function showPrevious() {
    const index = (selectedIndex - 1 + visiblePhotos.length) % visiblePhotos.length;
    setSelectedPhoto(visiblePhotos[index]);
  }

  function showNext() {
    const index = (selectedIndex + 1) % visiblePhotos.length;
    setSelectedPhoto(visiblePhotos[index]);
  }

  useEffect(() => {
    if (!selectedPhoto) return undefined;

    function handleKeyDown(event) {
      if (event.key === "Escape") setSelectedPhoto(null);
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedPhoto, selectedIndex, visiblePhotos]);

  return (
    <section className="portfolio-section section" id="portfolio">
      <div className="container">
        <header className="portfolio-masthead">
          <div className="portfolio-heading-copy">
            <p className="portfolio-eyebrow">
              <span className="portfolio-eyebrow-line" />
              THE ART OF PRESERVING MOMENTS
            </p>

            <h2 className="portfolio-main-title">
              Every story
              <br />
              deserves <em>to be remembered.</em>
            </h2>

            <p className="portfolio-lead">
              Little personalities. Beautiful beginnings. Real emotions.
              Explore the moments we've been trusted to preserve.
            </p>
          </div>

          <div className="portfolio-edition">
            <span className="portfolio-edition-mark">K.</span>
            <span className="portfolio-edition-rule" />
            <span>THE VISUAL<br />JOURNAL</span>
            <span className="portfolio-edition-count">001 — 013</span>
          </div>
        </header>

        <div className="portfolio-controls">
          <div className="portfolio-filter-list" aria-label="Filter portfolio">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                type="button"
                className={`portfolio-filter ${activeFilter === filter ? "is-active" : ""}`}
                aria-pressed={activeFilter === filter}
                onClick={() => {
                  setActiveFilter(filter);
                  setSelectedPhoto(null);
                }}
              >
                {filter}
                {activeFilter === filter && <span className="portfolio-filter-dot" />}
              </button>
            ))}
          </div>

          <p className="portfolio-results">
            <span>{String(visiblePhotos.length).padStart(2, "0")}</span>
            {" "}SELECTED FRAMES
          </p>
        </div>

        <div className={`portfolio-editorial-grid ${activeFilter !== "All Work" ? "portfolio-filtered-grid" : ""}`}>
          {visiblePhotos.map((photo, index) => {
            const featured = activeFilter === "All Work" && [0, 5, 9].includes(index);

            return (
              <article
                className={`portfolio-editorial-card ${featured ? "is-featured" : ""} portfolio-card-${index % 4}`}
                key={photo.id}
                style={{ "--portfolio-index": index }}
              >
                <button
                  className="portfolio-photo-button"
                  type="button"
                  onClick={() => setSelectedPhoto(photo)}
                  aria-label={`View ${photo.category.toLowerCase()} photo: ${photo.title}`}
                >
                  <div className="portfolio-photo-frame">
                    <img
                      className="portfolio-photo"
                      src={photo.src}
                      alt={`${photo.category} photography: ${photo.title}`}
                      loading={index < 3 ? "eager" : "lazy"}
                      decoding="async"
                    />

                    <span className="portfolio-photo-index">{photo.number}</span>

                    <span className="portfolio-photo-type">{photo.category}</span>

                    <span className="portfolio-photo-open" aria-hidden="true">
                      <ArrowUpRight size={22} strokeWidth={1.4} />
                    </span>

                    <div className="portfolio-photo-shade" />

                    <div className="portfolio-photo-info">
                      <span className="portfolio-photo-kicker">
                        {photo.category === "Kids" ? "CHILDHOOD COLLECTION" : "MATERNITY COLLECTION"}
                      </span>
                      <h3>{photo.title}</h3>
                    </div>
                  </div>
                </button>
              </article>
            );
          })}
        </div>

        <footer className="portfolio-bottom">
          <div className="portfolio-bottom-copy">
            <span className="portfolio-bottom-line" />
            <p>PHOTOGRAPHS FADE INTO THE PAST.</p>
            <p className="portfolio-bottom-emphasis">THE FEELING STAYS FOREVER.</p>
          </div>

          <a href="#contact" className="portfolio-enquire-link">
            <span>Let's create your story</span>
            <span className="portfolio-enquire-icon">
              <ArrowDownRight size={21} strokeWidth={1.4} />
            </span>
          </a>
        </footer>
      </div>

      {selectedPhoto && (
        <div
          className="portfolio-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedPhoto.category} photograph`}
          onClick={(event) => {
            if (event.target === event.currentTarget) setSelectedPhoto(null);
          }}
        >
          <button
            className="portfolio-lightbox-close"
            type="button"
            onClick={() => setSelectedPhoto(null)}
            aria-label="Close photo viewer"
          >
            <X size={25} />
          </button>

          <button
            className="portfolio-lightbox-arrow portfolio-lightbox-prev"
            type="button"
            onClick={showPrevious}
            aria-label="Previous photo"
          >
            <ArrowLeft size={23} />
          </button>

          <div className="portfolio-lightbox-content">
            <img src={selectedPhoto.src} alt={selectedPhoto.title} />
            <div className="portfolio-lightbox-caption">
              <span>{selectedPhoto.number} / {String(visiblePhotos.length).padStart(2, "0")} · {selectedPhoto.category}</span>
              <h3>{selectedPhoto.title}</h3>
            </div>
          </div>

          <button
            className="portfolio-lightbox-arrow portfolio-lightbox-next"
            type="button"
            onClick={showNext}
            aria-label="Next photo"
          >
            <ArrowRight size={23} />
          </button>
        </div>
      )}
    </section>
  );
}
