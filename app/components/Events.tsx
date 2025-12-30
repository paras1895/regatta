import Section from "./Section";

const EVENTS = [
  {
    id: "e1",
    title: "Kayak Ballet",
    desc: "Graceful synchronized kayaking performances on water.",
    img: "/events/kayak.jpg",
  },
  {
    id: "e2",
    title: "Shell Games",
    desc: "Fun-filled competitive games with strategy and teamwork.",
    img: "/events/shell.jpg",
  },
  {
    id: "e4",
    title: "Punt Formation",
    desc: "Creative formations showcasing balance and precision.",
    img: "/events/punt.jpg",
  },
  {
    id: "e3",
    title: "Telematches",
    desc: "Exciting team challenges testing speed and coordination.",
    img: "/events/telematches.jpg",
  },
  {
    id: "e5",
    title: "Mashaal Dance",
    desc: "A vibrant torch dance celebrating culture and energy.",
    img: "/events/mashaal.jpg",
  },
];

const Events: React.FC = () => (
  <Section id="events">
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-10">
        <h1 className="font-heading text-3xl sm:text-4xl font-bold">
          Our Events
        </h1>
        <p className="text-gray-600 mt-3 max-w-xl mx-auto">
          Experience a blend of creativity, competition, and celebration.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {EVENTS.map((e) => (
          <div
            key={e.id}
            className="
              group bg-white rounded-2xl overflow-hidden
              shadow-md hover:shadow-xl transition-all duration-300
              hover:-translate-y-1
            "
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={e.img}
                alt={e.title}
                className="
                  w-full h-full object-cover
                  transform group-hover:scale-110 transition-transform duration-500
                "
              />
              <div className="absolute inset-0" />
            </div>

            <div className="p-5">
              <h4 className="text-lg font-semibold text-gray-900">
                {e.title}
              </h4>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                {e.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

export default Events;
