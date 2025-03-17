import Link from "next/link";

export default function GalleryPreview() {
  const galleryImages = [
    {
      id: 1,
      src: "/images/gallery1.jpg",
      alt: "Zhoushen performing on stage",
    },
    {
      id: 2,
      src: "/images/gallery2.jpg",
      alt: "Zhoushen at a music award ceremony",
    },
    {
      id: 3,
      src: "/images/gallery3.jpg",
      alt: "Zhoushen in the recording studio",
    },
    {
      id: 4,
      src: "/images/gallery4.jpg",
      alt: "Zhoushen with fans at a meet and greet",
    },
    {
      id: 5,
      src: "/images/gallery5.jpg",
      alt: "Zhoushen performing at a festival",
    },
    {
      id: 6,
      src: "/images/gallery6.jpg",
      alt: "Zhoushen behind the scenes",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore moments from Zhoushen's performances, behind-the-scenes, and
            special appearances captured through the lens.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative aspect-square overflow-hidden group"
            >
              {image.src ? (
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 bg-gray-900 flex items-center justify-center text-white">
                  <span>Gallery Image</span>
                </div>
              )}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center opacity-0 group-hover:opacity-100">
                <Link
                  href={`/gallery/${image.id}`}
                  className="px-6 py-2 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors"
                >
                  View
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/gallery"
            className="px-8 py-3 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition-colors inline-block"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
} 