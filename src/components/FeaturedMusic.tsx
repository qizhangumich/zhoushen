import Image from "next/image";
import Link from "next/link";
import { getImageUrl } from "@/utils/imageLoader";

export default function FeaturedMusic() {
  const featuredAlbums = [
    {
      id: 1,
      title: "Eternal Echo",
      image: "/images/album1.jpg",
      year: "2023",
      tracks: 12,
    },
    {
      id: 2,
      title: "Midnight Serenade",
      image: "/images/album2.jpg",
      year: "2021",
      tracks: 10,
    },
    {
      id: 3,
      title: "Celestial Journey",
      image: "/images/album3.jpg",
      year: "2019",
      tracks: 14,
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Music</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore Zhoushen's discography, from chart-topping hits to
            soul-stirring ballads that have captivated audiences worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredAlbums.map((album) => (
            <div
              key={album.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
            >
              <div className="relative h-80 w-full">
                {album.image ? (
                  <img
                    src={getImageUrl(album.image)}
                    alt={`${album.title} album cover`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-black">
                    <div className="w-full h-full flex items-center justify-center text-white">
                      Album Cover
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{album.title}</h3>
                <div className="flex justify-between text-gray-600 mb-4">
                  <span>{album.year}</span>
                  <span>{album.tracks} tracks</span>
                </div>
                <div className="flex justify-between items-center">
                  <Link
                    href={`/music/${album.id}`}
                    className="text-black font-semibold hover:underline"
                  >
                    View Album
                  </Link>
                  <a
                    href="#"
                    className="text-black hover:text-gray-700"
                    aria-label="Play album"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/music"
            className="px-8 py-3 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition-colors inline-block"
          >
            View All Music
          </Link>
        </div>
      </div>
    </section>
  );
} 