import { useState } from "react";
import { galleryImages } from "../data/mock";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="relative py-28">
      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-16 text-center">
          <span className="glass-panel section-heading rounded-full px-5 py-3 text-xs text-[#d7a8ff]">
            Our Moments
          </span>
          <h2 className="mt-6 text-5xl font-semibold text-white md:text-6xl">
            Gallery <span className="text-[#ff76bf]">Showcase</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {galleryImages.map((image, index) => (
            <button
              key={image.id}
              type="button"
              onClick={() => setSelectedImage(image)}
              className={`group neo-card relative overflow-hidden rounded-[28px] text-left ${
                index === 0 || index === 5 ? "md:col-span-2" : ""
              }`}
            >
              <img
                src={image.url}
                alt={image.caption}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                  index === 0 || index === 5 ? "h-[400px]" : "h-[280px]"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09070f] via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-3xl font-semibold text-white">{image.caption}</p>
                <p className="mt-2 section-heading text-[0.68rem] text-white/45">{image.category}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[#06050b]/95 p-4 backdrop-blur"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-6xl" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="glass-panel mb-5 rounded-full px-5 py-3 text-sm text-white"
            >
              Close Preview
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.caption}
              className="max-h-[82vh] w-full rounded-[30px] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
