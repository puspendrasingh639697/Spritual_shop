import React from "react";

const events = [
  {
    title: "Ganesha Chaturthi",
    date: "September 07 2026, Monday",
    description:
      "Ganesha Chaturthi is celebrated to honor Lord Ganesha. The festival begins on the fourth day of the Hindu month Bhadrapada.",
    image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=600&auto=format&fit=crop&q=80",
    day: "07",
    dayName: "Monday",
  },
  {
    title: "Diwali",
    date: "November 08 2026, Sunday",
    description:
      "The festival of lights, Diwali signifies the victory of light over darkness, good over evil, and knowledge over ignorance.",
    image: "https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?w=600&auto=format&fit=crop&q=80",
    day: "08",
    dayName: "Sunday",
  },
  {
    title: "Maha Shivaratri",
    date: "February 15 2026, Sunday",
    description:
      "Maha Shivaratri is a major Hindu festival celebrated annually in honor of the deity Lord Shiva, marked by night-long vigil and prayers.",
    image: "https://images.unsplash.com/photo-1609137144881-540b5914664d?w=600&auto=format&fit=crop&q=80",
    day: "15",
    dayName: "Sunday",
  },
];

const UpcomingEvents = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-6 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Upcoming Events
        </h2>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Stay updated with upcoming holy festivals and auspicious dates.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden w-80 transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {event.title}
                </h3>
                <p className="text-amber-600 text-xs font-semibold mb-3">{event.date}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
              </div>
            </div>
            
            <div className="px-6 pb-6 flex items-center justify-between border-t border-gray-50 pt-4 mt-2">
              <div className="text-xs text-gray-400 uppercase tracking-wider font-medium">Auspicious Date</div>
              <div className="bg-amber-500 text-white font-bold text-center py-1.5 px-3 rounded-xl shadow-md shadow-amber-500/20">
                <p className="text-base leading-tight">{event.day}</p>
                <p className="text-[10px] tracking-wide uppercase font-semibold">{event.dayName}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;