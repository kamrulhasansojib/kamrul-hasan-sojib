import React, { useState, useEffect } from "react";
import { Award, ChevronLeft, ChevronRight, X } from "lucide-react";
import { CERTIFICATES } from "../constants";

const Certifications: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const getCardsPerView = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth >= 1024) return 3; // Desktop: 3 cards
    if (window.innerWidth >= 768) return 2; // Tablet: 2 cards
    return 1; // Mobile: 1 card
  };

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
      setCurrentIndex(0);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close modal on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden"; // Prevent background scroll
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  const maxIndex = Math.max(0, CERTIFICATES.length - cardsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const openModal = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const visibleCertificates = CERTIFICATES.slice(
    currentIndex,
    currentIndex + cardsPerView
  );

  return (
    <>
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
                  <div className="mb-4 overflow-hidden rounded-lg group">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      onClick={() => openModal(cert.image)}
                      className="w-full h-48 object-cover rounded-lg cursor-pointer transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {cert.title}
                      </h3>
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

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fadeIn"
          onClick={closeModal}
        >
          <div
            className="relative max-w-3xl max-h-[70vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 md:-top-14 md:-right-14 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all backdrop-blur-sm border border-white/20 group"
              aria-label="Close modal"
            >
              <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* Certificate Image */}
            <div className="bg-white/5 p-2 md:p-4 rounded-xl border border-white/20 backdrop-blur-md">
              <img
                src={selectedImage}
                alt="Certificate"
                className="w-full h-auto max-h-[60vh] object-contain rounded-lg"
              />
            </div>

            {/* Hint Text */}
            <p className="text-center text-gray-400 text-sm mt-4">
              Click outside or press ESC to close
            </p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </>
  );
};

export default Certifications;
