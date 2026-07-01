import Link from "next/link";

export default function CallToAction() {
  return (
    <section id="contact" className="bg-[#18231d] py-[60px] text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-6 max-md:flex-col max-md:items-start max-sm:px-4">
        <div>
          <p className="text-[13px] font-black tracking-[3px] text-[#f0b36b] uppercase">
            Ready For The North?
          </p>
          <h2 className="mt-3 max-w-2xl text-[38px] leading-[1.15] font-black">
            Start your Safarnama with a route built around you.
          </h2>
          <p className="mt-4 max-w-[760px] leading-8 text-white/75">
            Share your travel month, group size, budget, and dream valley. We
            will suggest a practical itinerary for the season.
          </p>
        </div>

        <Link
          href="/inquiry"
          className="inline-flex shrink-0 justify-center bg-[#f0b36b] px-6 py-3.5 text-sm font-black text-[#18231d] shadow-[6px_6px_0_#c4532e] transition hover:-translate-y-0.5"
        >
          Inquire Now
        </Link>
      </div>
    </section>
  );
}
