const steps = [
  "Tell us your dates, budget, and preferred travel pace.",
  "Choose a route across Hunza, Skardu, Naran, or custom valleys.",
  "We arrange stays, transport, local guidance, and backup plans.",
  "You travel with a clear itinerary and on-trip support.",
];

export default function WorkflowSection() {
  return (
    <section id="planning" className="py-[70px]">
      <div className="mx-auto grid max-w-6xl grid-cols-[0.8fr_1fr] gap-11 px-6 max-md:grid-cols-1 max-sm:px-4">
        <div>
          <p className="text-[13px] font-black tracking-[3px] text-[#c4532e] uppercase">
            Trip Planning
          </p>
          <h2 className="mt-3 text-[38px] leading-[1.15] font-black">
            A simple way to plan a northern trip.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#536052]">
            Mountain trips need timing, weather awareness, and realistic routes.
            Safarnama keeps the plan clear before you leave home.
          </p>
        </div>

        <ol className="grid list-none gap-4 p-0">
          {steps.map((step, index) => (
            <li
              key={step}
              className="flex gap-4 border-l-4 border-[#6b9f88] bg-[#fff9ed] p-5"
            >
              <span className="font-mono text-[28px] font-black text-[#c4532e]">
                {index + 1}
              </span>
              <p className="pt-1 text-lg font-extrabold">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
