export default function TourPage() {
  const upcomingTours = [
    {
      id: 1,
      date: "June 15, 2024",
      venue: "Madison Square Garden",
      location: "New York, NY",
      ticketsUrl: "#",
      status: "On Sale",
    },
    {
      id: 2,
      date: "June 22, 2024",
      venue: "The O2 Arena",
      location: "London, UK",
      ticketsUrl: "#",
      status: "On Sale",
    },
    {
      id: 3,
      date: "July 5, 2024",
      venue: "Staples Center",
      location: "Los Angeles, CA",
      ticketsUrl: "#",
      status: "On Sale",
    },
    {
      id: 4,
      date: "July 12, 2024",
      venue: "Tokyo Dome",
      location: "Tokyo, Japan",
      ticketsUrl: "#",
      status: "On Sale",
    },
    {
      id: 5,
      date: "July 25, 2024",
      venue: "Allianz Parque",
      location: "São Paulo, Brazil",
      ticketsUrl: "#",
      status: "On Sale",
    },
    {
      id: 6,
      date: "August 8, 2024",
      venue: "AccorHotels Arena",
      location: "Paris, France",
      ticketsUrl: "#",
      status: "On Sale",
    },
    {
      id: 7,
      date: "August 15, 2024",
      venue: "Mercedes-Benz Arena",
      location: "Berlin, Germany",
      ticketsUrl: "#",
      status: "On Sale",
    },
    {
      id: 8,
      date: "August 22, 2024",
      venue: "Rogers Centre",
      location: "Toronto, Canada",
      ticketsUrl: "#",
      status: "On Sale",
    },
    {
      id: 9,
      date: "September 5, 2024",
      venue: "Sydney Opera House",
      location: "Sydney, Australia",
      ticketsUrl: "#",
      status: "Coming Soon",
    },
    {
      id: 10,
      date: "September 12, 2024",
      venue: "Rod Laver Arena",
      location: "Melbourne, Australia",
      ticketsUrl: "#",
      status: "Coming Soon",
    },
  ];

  const pastTours = [
    {
      id: 1,
      date: "December 15, 2023",
      venue: "Wembley Stadium",
      location: "London, UK",
    },
    {
      id: 2,
      date: "November 22, 2023",
      venue: "Madison Square Garden",
      location: "New York, NY",
    },
    {
      id: 3,
      date: "October 5, 2023",
      venue: "Staples Center",
      location: "Los Angeles, CA",
    },
    {
      id: 4,
      date: "September 12, 2023",
      venue: "Tokyo Dome",
      location: "Tokyo, Japan",
    },
    {
      id: 5,
      date: "August 25, 2023",
      venue: "Allianz Parque",
      location: "São Paulo, Brazil",
    },
  ];

  return (
    <div className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Tour Dates</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join Zhoushen on the "Eternal Echo" world tour. Experience the magic
            of live performances across major cities worldwide.
          </p>
        </div>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Upcoming Shows</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-4 px-6 text-left">Date</th>
                  <th className="py-4 px-6 text-left">Venue</th>
                  <th className="py-4 px-6 text-left">Location</th>
                  <th className="py-4 px-6 text-left">Status</th>
                  <th className="py-4 px-6 text-right">Tickets</th>
                </tr>
              </thead>
              <tbody>
                {upcomingTours.map((tour) => (
                  <tr
                    key={tour.id}
                    className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-4 px-6">{tour.date}</td>
                    <td className="py-4 px-6 font-medium">{tour.venue}</td>
                    <td className="py-4 px-6">{tour.location}</td>
                    <td className="py-4 px-6">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          tour.status === "On Sale"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {tour.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <a
                        href={tour.ticketsUrl}
                        className="px-4 py-2 bg-black text-white font-bold rounded hover:bg-gray-800 transition-colors inline-block"
                      >
                        Buy Tickets
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8">Past Shows</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-4 px-6 text-left">Date</th>
                  <th className="py-4 px-6 text-left">Venue</th>
                  <th className="py-4 px-6 text-left">Location</th>
                </tr>
              </thead>
              <tbody>
                {pastTours.map((tour) => (
                  <tr
                    key={tour.id}
                    className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-4 px-6">{tour.date}</td>
                    <td className="py-4 px-6 font-medium">{tour.venue}</td>
                    <td className="py-4 px-6">{tour.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
} 