export default function AboutPage() {
  return (
    <div className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">About Zhoushen</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The journey, inspiration, and vision behind the voice that has
            captivated millions worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="flex justify-center items-center h-full">
            <div className="h-full overflow-hidden rounded-lg" style={{maxWidth: "80%"}}>
              <img 
                src="/images/gallery16.jpg" 
                alt="Zhoushen Portrait" 
                className="w-full h-full object-contain"
                style={{maxHeight: "400px"}}
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">The Artist</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Born in Shanghai, China, Zhoushen discovered a passion for music
                at an early age. Growing up in a family of musicians, the
                foundations of rhythm and melody were instilled in them from
                childhood. After studying at the prestigious Shanghai
                Conservatory of Music, Zhoushen emerged onto the international
                music scene in 2015 with the debut album &ldquo;First Light.&rdquo;
              </p>
              <p>
                Known for a powerful vocal range that spans multiple octaves and
                a unique ability to blend traditional Chinese musical elements
                with contemporary pop and R&B, Zhoushen has carved a distinctive
                niche in the global music landscape.
              </p>
              <p>
                With five studio albums, multiple world tours, and numerous
                awards including three Grammy nominations, Zhoushen has
                established a reputation as one of the most innovative and
                influential artists of this generation.
              </p>
              <p>
                Beyond music, Zhoushen is a dedicated philanthropist, focusing
                on educational initiatives that bring music programs to
                underprivileged communities around the world through the
                Harmonic Future Foundation.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Musical Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
            <div className="space-y-12 relative">
              {/* Timeline items */}
              <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                  <h3 className="text-xl font-bold mb-2">2015</h3>
                  <p className="text-gray-700">
                    Released debut album &ldquo;First Light&rdquo; to critical acclaim,
                    introducing a fresh voice to the music industry.
                  </p>
                </div>
                <div className="bg-black rounded-full h-4 w-4 flex items-center justify-center relative z-10">
                  <div className="bg-white rounded-full h-2 w-2"></div>
                </div>
                <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
                <div className="bg-black rounded-full h-4 w-4 flex items-center justify-center relative z-10">
                  <div className="bg-white rounded-full h-2 w-2"></div>
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left mb-4 md:mb-0">
                  <h3 className="text-xl font-bold mb-2">2017</h3>
                  <p className="text-gray-700">
                    Sophomore album &ldquo;Harmonic Fusion&rdquo; showcased experimental
                    sounds and collaborations with international artists.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                  <h3 className="text-xl font-bold mb-2">2019</h3>
                  <p className="text-gray-700">
                    &ldquo;Celestial Journey&rdquo; album topped charts worldwide and
                    launched the first global tour, performing in 20 countries.
                  </p>
                </div>
                <div className="bg-black rounded-full h-4 w-4 flex items-center justify-center relative z-10">
                  <div className="bg-white rounded-full h-2 w-2"></div>
                </div>
                <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
                <div className="bg-black rounded-full h-4 w-4 flex items-center justify-center relative z-10">
                  <div className="bg-white rounded-full h-2 w-2"></div>
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left mb-4 md:mb-0">
                  <h3 className="text-xl font-bold mb-2">2021</h3>
                  <p className="text-gray-700">
                    Released &ldquo;Midnight Serenade&rdquo; during the global pandemic,
                    connecting with fans through virtual concerts.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                  <h3 className="text-xl font-bold mb-2">2023</h3>
                  <p className="text-gray-700">
                    Latest album &ldquo;Eternal Echo&rdquo; debuted at #1 on global charts,
                    launching the most ambitious world tour to date.
                  </p>
                </div>
                <div className="bg-black rounded-full h-4 w-4 flex items-center justify-center relative z-10">
                  <div className="bg-white rounded-full h-2 w-2"></div>
                </div>
                <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-8 md:p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Awards & Recognition
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded shadow-md">
              <h3 className="text-xl font-bold mb-2">Grammy Awards</h3>
              <p className="text-gray-700">
                3 nominations including &ldquo;Best New Artist&rdquo; (2016) and &ldquo;Album of
                the Year&rdquo; (2020)
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow-md">
              <h3 className="text-xl font-bold mb-2">Billboard Music Awards</h3>
              <p className="text-gray-700">
                Winner of &ldquo;Top Global Artist&rdquo; (2020) and &ldquo;Top Streaming Artist&rdquo;
                (2023)
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow-md">
              <h3 className="text-xl font-bold mb-2">MTV Music Awards</h3>
              <p className="text-gray-700">
                Winner of &ldquo;Best International Act&rdquo; (2019, 2022)
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow-md">
              <h3 className="text-xl font-bold mb-2">Asian Music Awards</h3>
              <p className="text-gray-700">
                5-time winner including &ldquo;Artist of the Year&rdquo; (2019, 2021, 2023)
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow-md">
              <h3 className="text-xl font-bold mb-2">BRIT Awards</h3>
              <p className="text-gray-700">
                Winner of &ldquo;International Solo Artist&rdquo; (2020)
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow-md">
              <h3 className="text-xl font-bold mb-2">World Music Awards</h3>
              <p className="text-gray-700">
                Winner of &ldquo;World&apos;s Best Live Act&rdquo; (2022)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 