import Link from "next/link";
import { getImageUrl } from "@/utils/imageLoader";
import YouTubeEmbed from "@/components/YouTubeEmbed";

export default function GalleryPage() {
  const galleryImages = [
    {
      id: 1,
      src: "/images/gallery1.jpg",
      alt: "Zhoushen performing on stage",
      category: "Performance",
    },
    {
      id: 2,
      src: "/images/gallery2.jpg",
      alt: "Zhoushen at an award ceremony",
      category: "Event",
    },
    {
      id: 3,
      src: "/images/gallery3.jpg",
      alt: "Zhoushen in the recording studio",
      category: "Studio",
    },
    {
      id: 4,
      src: "/images/gallery4.jpg",
      alt: "Zhoushen with fans",
      category: "Fan Meet",
    },
    {
      id: 5,
      src: "/images/gallery5.jpg",
      alt: "Zhoushen performing at a festival",
      category: "Performance",
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
      alt: "Zhoushen portrait",
      category: "Portrait",
    },
    {
      id: 8,
      src: "/images/gallery8.jpg",
      alt: "Zhoushen on stage at a concert",
      category: "Performance",
    },
    {
      id: 9,
      src: "/images/gallery9.jpg",
      alt: "Zhoushen during a photo shoot",
      category: "Photo Shoot",
    },
    {
      id: 10,
      src: "/images/gallery10.jpg",
      alt: "Zhoushen with other artists",
      category: "Collaboration",
    },
    {
      id: 11,
      src: "/images/gallery11.jpg",
      alt: "Zhoushen at a press conference",
      category: "Event",
    },
    {
      id: 12,
      src: "/images/gallery12.jpg",
      alt: "Zhoushen singing on stage",
      category: "Performance",
    },
    {
      id: 13,
      src: "/images/gallery13.jpg",
      alt: "Zhoushen during rehearsal",
      category: "Behind the Scenes",
    },
    {
      id: 14,
      src: "/images/gallery14.jpg",
      alt: "Zhoushen in casual attire",
      category: "Casual",
    },
    {
      id: 15,
      src: "/images/gallery15.jpg",
      alt: "Zhoushen close-up portrait",
      category: "Portrait",
    },
  ];

  // Zhou Shen video performances
  const videoPerformances = [
    { id: "T-VpijW6qtI", title: "Zhou Shen - Lan Ruo's Love" },
    { id: "rfmNqSWVZ5k", title: "Zhou Shen - Floral Sea" },
    { id: "G1KwPqbPP5o", title: "Zhou Shen - At Parting" },
    { id: "UmOT3VEEQI8", title: "Zhou Shen - Unpredictable" },
    { id: "NAa7UBKJ_y8", title: "Zhou Shen & Phoenix Legend - The Most Beautiful" },
    { id: "qDf0ctm4x8g", title: "Zhou Shen - Falling Flowers" },
    { id: "bbwcI6Pgu_U", title: "Zhou Shen - Song of Beginning" }
  ];

  return (
    <div className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore moments from Zhoushen's performances, behind-the-scenes, and
            special appearances captured through photos and videos.
          </p>
        </div>

        {/* Photo Gallery */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Photos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="relative aspect-square overflow-hidden group"
              >
                {image.src ? (
                  <img
                    src={getImageUrl(image.src)}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gray-900 flex items-center justify-center text-white">
                    <span>Gallery Image</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
                  <h3 className="text-white mb-2 px-4 text-center">{image.alt}</h3>
                  <span className="px-3 py-1 bg-white text-black text-sm rounded-full">
                    {image.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Gallery */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videoPerformances.map((video) => (
              <div key={video.id} className="mb-8">
                <YouTubeEmbed videoId={video.id} title={video.title} className="mb-2" />
                <h3 className="text-lg font-bold mt-2">{video.title}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="https://www.youtube.com/playlist?list=RDEMB8AjtjceuzSOt3pkMzm4NQ"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition-colors inline-block"
            >
              View More Videos
            </a>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-100 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-6">
            Follow Zhoushen on social media for the latest photos, videos, and updates.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#instagram"
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full hover:opacity-90 transition-opacity"
            >
              Instagram
            </a>
            <a
              href="#twitter"
              className="px-6 py-3 bg-[#1DA1F2] text-white font-bold rounded-full hover:opacity-90 transition-opacity"
            >
              Twitter
            </a>
            <a
              href="#weibo"
              className="px-6 py-3 bg-[#E6162D] text-white font-bold rounded-full hover:opacity-90 transition-opacity"
            >
              Weibo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 