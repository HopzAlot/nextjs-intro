import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl grid-cols-[1.05fr_0.95fr] items-center gap-11 px-6 py-20 max-md:grid-cols-1 max-sm:px-4 max-sm:py-14">
      <div>
        <p className="text-[13px] font-black tracking-[3px] text-[#c4532e] uppercase">
          Northern Pakistan Travel
        </p>
        <h1 className="mt-4 max-w-[760px] text-[62px] leading-[1.02] font-black max-sm:text-[42px]">
          Safarnama plans mountain escapes with local guides.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#536052]">
          Discover Hunza, Skardu, Fairy Meadows, and Naran with curated routes,
          trusted stays, and flexible trips built around the season.
        </p>

        <div className="mt-8 flex gap-3.5 max-sm:flex-col">
          <a
            href="#destinations"
            className="inline-flex justify-center bg-[#18231d] px-6 py-3.5 text-sm font-black text-white shadow-[6px_6px_0_#c4532e] transition hover:-translate-y-0.5"
          >
            Explore Trips
          </a>
          <a
            href="#planning"
            className="inline-flex justify-center border-2 border-[#18231d] px-6 py-3.5 text-sm font-black transition hover:bg-[#fff7df]"
          >
            Plan My Route
          </a>
        </div>
      </div>

      <div className="overflow-hidden border-2 border-[#18231d] bg-[#fff9ed] shadow-[12px_12px_0_#6b9f88]">
        <Image
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1100&q=80"
          alt="Mountain valley at sunrise"
          width={1100}
          height={760}
          priority
          className="h-[430px] w-full object-cover max-sm:h-[320px]"
        />
        <div className="grid grid-cols-3 border-t-2 border-[#18231d] text-center max-sm:grid-cols-1">
          <div className="p-4">
            <strong className="block text-2xl font-black">12+</strong>
            <span className="text-sm font-bold text-[#536052]">Routes</span>
          </div>
          <div className="border-x-2 border-[#18231d] p-4 max-sm:border-x-0 max-sm:border-y-2">
            <strong className="block text-2xl font-black">4.9</strong>
            <span className="text-sm font-bold text-[#536052]">Rating</span>
          </div>
          <div className="p-4">
            <strong className="block text-2xl font-black">24/7</strong>
            <span className="text-sm font-bold text-[#536052]">Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
