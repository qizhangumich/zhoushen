import Link from "next/link";

export default function TourDates() {
  const upcomingTours = [
    {
      id: 1,
      date: "June 15, 2024",
      venue: "Madison Square Garden",
      location: "New York, NY",
      ticketsUrl: "#",
    },
    {
      id: 2,
      date: "June 22, 2024",
      venue: "The O2 Arena",
      location: "London, UK",
      ticketsUrl: "#",
    },
    {
      id: 3,
      date: "July 5, 2024",
      venue: "Staples Center",
      location: "Los Angeles, CA",
      ticketsUrl: "#",
    },
    {
      id: 4,
      date: "July 12, 2024",
      venue: "Tokyo Dome",
      location: "Tokyo, Japan",
      ticketsUrl: "#",
    },
    {
      id: 5,
      date: "July 25, 2024",
      venue: "Allianz Parque",
      location: "São Paulo, Brazil",
      ticketsUrl: "#",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Upcoming Tour Dates</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't miss the chance to experience Zhoushen's electrifying live
            performances. Secure your tickets now for an unforgettable night.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="py-4 px-6 text-left">Date</th>
                <th className="py-4 px-6 text-left">Venue</th>
                <th className="py-4 px-6 text-left">Location</th>
                <th className="py-4 px-6 text-right">Tickets</th>
              </tr>
            </thead>
            <tbody>
              {upcomingTours.map((tour) => (
                <tr
                  key={tour.id}
                  className="border-b border-gray-800 hover:bg-gray-900 transition-colors"
                >
                  <td className="py-4 px-6">{tour.date}</td>
                  <td className="py-4 px-6 font-medium">{tour.venue}</td>
                  <td className="py-4 px-6">{tour.location}</td>
                  <td className="py-4 px-6 text-right">
                    <a
                      href={tour.ticketsUrl}
                      className="px-4 py-2 bg-white text-black font-bold rounded hover:bg-gray-200 transition-colors inline-block"
                    >
                      Buy Tickets
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/tour"
            className="px-8 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-black transition-colors inline-block"
          >
            View All Tour Dates
          </Link>
        </div>
      </div>
    </section>
  );
} 