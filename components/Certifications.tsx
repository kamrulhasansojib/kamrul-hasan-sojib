import React, { useState } from "react";
import { Award, ChevronLeft, ChevronRight } from "lucide-react";
import { CERTIFICATES } from "../constants";

const Certifications: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getCardsPerView = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth >= 1024) return 3; // Desktop: 3 cards
    if (window.innerWidth >= 768) return 2; // Tablet: 2 cards
    return 1; // Mobile: 1 card
  };

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());

  React.useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
      setCurrentIndex(0);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, CERTIFICATES.length - cardsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const visibleCertificates = CERTIFICATES.slice(
    currentIndex,
    currentIndex + cardsPerView
  );

  return (
    <section id="certifications" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certifications
          </h2>
          <p className="text-gray-400 text-lg">
            Professional certifications and achievements
          </p>
        </div>

        <div className="relative">
          {/* Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {visibleCertificates.map((cert, index) => (
              <div
                key={currentIndex + index}
                className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all hover:scale-105"
              >
                <div className="mb-4">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                    <p className="text-gray-400 text-sm">{cert.issuer}</p>
                    <p className="text-gray-500 text-sm">{cert.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {CERTIFICATES.length > cardsPerView && (
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={handlePrev}
                className="bg-white/5 hover:bg-white/10 border border-white/10 p-3 rounded-full transition-all hover:border-blue-500/50 active:scale-95"
                aria-label="Previous certificates"
              >
                <ChevronLeft className="w-6 h-6 text-gray-400" />
              </button>

              {/* Dots Indicator */}
              <div className="flex gap-2">
                {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "bg-blue-500 w-8"
                        : "bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="bg-white/5 hover:bg-white/10 border border-white/10 p-3 rounded-full transition-all hover:border-blue-500/50 active:scale-95"
                aria-label="Next certificates"
              >
                <ChevronRight className="w-6 h-6 text-gray-400" />
              </button>
            </div>
          )}
        </div>

        {/* Counter */}
        <div className="text-center mt-6 text-gray-400 text-sm">
          Showing {currentIndex + 1}-
          {Math.min(currentIndex + cardsPerView, CERTIFICATES.length)} of{" "}
          {CERTIFICATES.length} certifications
        </div>
      </div>
    </section>
  );
};

export default Certifications;
