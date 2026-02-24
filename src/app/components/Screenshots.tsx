import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const screenshots = [
  {
    url: "https://images.unsplash.com/photo-1721987203048-24725e93047e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBnYW1lJTIwc2NyZWVuc2hvdCUyMGNvbG9yZnVsfGVufDF8fHx8MTc2OTU4MjI5MHww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Main Menu",
  },
  {
    url: "https://images.unsplash.com/photo-1564429238817-393bd4286b2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwZGF5Y2FyZSUyMGNvbG9yZnVsJTIwcGxheWZ1bHxlbnwxfHx8fDE3Njk2OTY1NzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Daycare Activities",
  },
  {
    url: "https://images.unsplash.com/photo-1593953443285-bf7335acbca0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJ0b29uJTIwY2hhcmFjdGVycyUyMGNvbG9yZnVsJTIwZ3JvdXB8ZW58MXx8fHwxNzY5Njk2NTc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Character Selection",
  },
  {
    url: "https://images.unsplash.com/photo-1571584004609-3b9d08de5755?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGF5ZnVsJTIwY2hpbGRyZW4lMjB0b3lzJTIwY29sb3JmdWx8ZW58MXx8fHwxNzY5Njk2NTc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Mini Games",
  },
];

export function Screenshots() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-purple-600 font-semibold text-sm uppercase tracking-wide">
            Game Preview
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2">
            See It In
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Action
            </span>
          </h2>
          <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore the colorful world of Spookiz Daycare
          </p>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="aspect-[9/16] relative">
                <ImageWithFallback
                  src={screenshot.url}
                  alt={screenshot.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <p className="absolute bottom-4 left-4 right-4 text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {screenshot.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel View */}
        <div className="md:hidden relative">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <div className="aspect-[9/16] relative">
              <ImageWithFallback
                src={screenshots[currentIndex].url}
                alt={screenshots[currentIndex].alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <p className="absolute bottom-6 left-6 right-6 text-white font-bold text-xl">
                {screenshots[currentIndex].alt}
              </p>
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300"
            aria-label="Previous screenshot"
          >
            <ChevronLeft className="w-6 h-6 text-gray-900" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300"
            aria-label="Next screenshot"
          >
            <ChevronRight className="w-6 h-6 text-gray-900" />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-purple-600 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to screenshot ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
