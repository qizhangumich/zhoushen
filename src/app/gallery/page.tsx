import Link from "next/link";

export default function GalleryPage() {
  const galleryImages = [
    {
      id: 1,
      src: "/images/gallery1.jpg",
      alt: "Zhoushen performing on stage",
      category: "Performances",
    },
    {
      id: 2,
      src: "/images/gallery2.jpg",
      alt: "Zhoushen at a music award ceremony",
      category: "Events",
    },
    {
      id: 3,
      src: "/images/gallery3.jpg",
      alt: "Zhoushen in the recording studio",
      category: "Behind the Scenes",
    },
    {
      id: 4,
      src: "/images/gallery4.jpg",
      alt: "Zhoushen with fans at a meet and greet",
      category: "Fan Interactions",
    },
    {
      id: 5,
      src: "/images/gallery5.jpg",
      alt: "Zhoushen performing at a festival",
      category: "Performances",
    },
    {
      id: 6,
      src: "/images/gallery6.jpg",
      alt: "Zhoushen behind the scenes",
      category: "Behind the Scenes",
    },
    {
      id: 7,
      src: "/images/gallery7.jpg",
      alt: "Zhoushen at a photoshoot",
      category: "Photoshoots",
    },
    {
      id: 8,
      src: "/images/gallery8.jpg",
      alt: "Zhoushen at a charity event",
      category: "Events",
    },
    {
      id: 9,
      src: "/images/gallery9.jpg",
      alt: "Zhoushen performing a ballad",
      category: "Performances",
    },
    {
      id: 10,
      src: "/images/gallery10.jpg",
      alt: "Zhoushen with other artists",
      category: "Collaborations",
    },
    {
      id: 11,
      src: "/images/gallery11.jpg",
      alt: "Zhoushen at album release party",
      category: "Events",
    },
    {
      id: 12,
      src: "/images/gallery12.jpg",
      alt: "Zhoushen rehearsing for tour",
      category: "Behind the Scenes",
    },
  ];

  const categories = [
    "All",
    "Performances",
    "Events",
    "Behind the Scenes",
    "Fan Interactions",
    "Photoshoots",
    "Collaborations",
  ];

  return (
    <div className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore Zhoushen's journey through captivating images from
            performances, events, and behind-the-scenes moments.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full border border-gray-300 hover:bg-black hover:text-white hover:border-black transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-opacity flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 p-4">
                <p className="text-white text-center mb-4">{image.alt}</p>
                <Link
                  href={`/gallery/${image.id}`}
                  className="px-6 py-2 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors"
                >
                  View
                </Link>
              </div>
              <div className="absolute bottom-0 left-0 bg-black bg-opacity-70 text-white text-xs px-3 py-1">
                {image.category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 