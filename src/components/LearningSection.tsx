const destinations = [
  {
    title: "Hunza Valley",
    text: "Karimabad, Attabad Lake, Passu Cones, and calm evenings surrounded by the Karakoram.",
  },
  {
    title: "Skardu Escape",
    text: "Cold Desert, Shangrila, Shigar Fort, and gateway routes toward Deosai plains.",
  },
  {
    title: "Naran & Kaghan",
    text: "Lake Saif-ul-Malook, Babusar Top, riverside stays, and family-friendly summer routes.",
  },
];

export default function LearningSection() {
  return (
    <section id="destinations" className="bg-[#fff9ed] py-[70px]">
      <div className="mx-auto max-w-6xl px-6 max-sm:px-4">
        <div className="max-w-[680px]">
          <p className="text-[13px] font-black tracking-[3px] text-[#c4532e] uppercase">
            Featured Destinations
          </p>
          <h2 className="mt-3 text-[38px] leading-[1.15] font-black">
            Pick your valley, we handle the route.
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-5 max-md:grid-cols-1">
          {destinations.map((destination) => (
            <article
              key={destination.title}
              className="border-2 border-[#18231d] bg-[#f5efe3] p-6 transition hover:-translate-y-1 hover:shadow-[8px_8px_0_#c4532e]"
            >
              <h3 className="text-[22px] font-black">{destination.title}</h3>
              <p className="mt-3 leading-7 text-[#536052]">
                {destination.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
