import { useState } from "react";
import { galleryImages } from "../data/mock";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <span className="rounded-full bg-[#8B1538]/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-[#8B1538]">
            Our Moments
          </span>
          <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
            Gallery <span className="text-[#8B1538]">Showcase</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 bg-[#D4AF37]" />
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {galleryImages.map((image, index) => (
            <button
              key={image.id}
              type="button"
              onClick={() => setSelectedImage(image)}
              className={`group relative overflow-hidden rounded-2xl text-left shadow-lg ${
                index === 0 || index === 5 ? "md:col-span-2" : ""
              }`}
            >
              <img
                src={image.url}
                alt={image.caption}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                  index === 0 || index === 5 ? "h-[360px]" : "h-[240px]"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <p className="font-semibold">{image.caption}</p>
                <p className="mt-1 text-sm uppercase tracking-wider text-white/75">{image.category}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="mb-4 rounded-full bg-white/10 px-4 py-2 text-sm text-white"
            >
              Close
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.caption}
              className="max-h-[80vh] w-full rounded-2xl object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
