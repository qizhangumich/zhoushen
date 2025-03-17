import Link from "next/link";

export default function MusicPage() {
  const albums = [
    {
      id: 1,
      title: "Eternal Echo",
      image: "/images/album1.jpg",
      year: "2023",
      tracks: 12,
      description:
        "Zhoushen's latest album explores themes of resilience and hope through powerful vocals and innovative production.",
    },
    {
      id: 2,
      title: "Midnight Serenade",
      image: "/images/album2.jpg",
      year: "2021",
      tracks: 10,
      description:
        "A collection of soulful ballads that showcase Zhoushen's emotional depth and vocal range.",
    },
    {
      id: 3,
      title: "Celestial Journey",
      image: "/images/album3.jpg",
      year: "2019",
      tracks: 14,
      description:
        "The breakthrough album that catapulted Zhoushen to international fame, featuring the hit single 'Starlight'.",
    },
    {
      id: 4,
      title: "Harmonic Fusion",
      image: "/images/album4.jpg",
      year: "2017",
      tracks: 11,
      description:
        "An experimental album blending traditional and contemporary sounds, showcasing Zhoushen's musical versatility.",
    },
    {
      id: 5,
      title: "First Light",
      image: "/images/album5.jpg",
      year: "2015",
      tracks: 9,
      description:
        "Zhoushen's debut album, introducing the world to a unique voice that would soon captivate millions.",
    },
  ];

  const singles = [
    {
      id: 1,
      title: "Whispers in the Wind",
      image: "/images/single1.jpg",
      year: "2024",
      description: "A haunting melody that showcases Zhoushen's vocal prowess.",
    },
    {
      id: 2,
      title: "Electric Dreams",
      image: "/images/single2.jpg",
      year: "2022",
      description:
        "An upbeat track that topped charts worldwide for three consecutive weeks.",
    },
    {
      id: 3,
      title: "Moonlit Path",
      image: "/images/single3.jpg",
      year: "2020",
      description:
        "A collaboration with renowned producer Max Harmony that explores new sonic territories.",
    },
  ];

  return (
    <div className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Music</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore Zhoushen's complete discography, from chart-topping albums to
            exclusive singles and collaborations.
          </p>
        </div>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Albums</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {albums.map((album) => (
              <div
                key={album.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
              >
                <div className="relative h-80 w-full">
                  {album.image ? (
                    <img
                      src={album.image}
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
                  <p className="text-gray-700 mb-4">{album.description}</p>
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
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8">Singles & EPs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {singles.map((single) => (
              <div
                key={single.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
              >
                <div className="relative h-80 w-full">
                  {single.image ? (
                    <img
                      src={single.image}
                      alt={`${single.title} single cover`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-black">
                      <div className="w-full h-full flex items-center justify-center text-white">
                        Single Cover
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{single.title}</h3>
                  <div className="text-gray-600 mb-4">
                    <span>{single.year}</span>
                  </div>
                  <p className="text-gray-700 mb-4">{single.description}</p>
                  <div className="flex justify-between items-center">
                    <Link
                      href={`/music/single/${single.id}`}
                      className="text-black font-semibold hover:underline"
                    >
                      View Single
                    </Link>
                    <a
                      href="#"
                      className="text-black hover:text-gray-700"
                      aria-label="Play single"
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
        </section>
      </div>
    </div>
  );
} 