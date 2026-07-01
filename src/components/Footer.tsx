import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t-2 border-[#18231d] bg-[#18231d] text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-[1.2fr_0.8fr_0.8fr] gap-10 px-6 py-12 max-md:grid-cols-1 max-sm:px-4">
        <div>
          <p className="text-[13px] font-black tracking-[3px] text-[#f0b36b] uppercase">
            Safarnama
          </p>
          <h2 className="mt-3 max-w-xl text-3xl font-black leading-tight">
            Har safar ek kahani hai, aur har kahani ka rasta north se guzarta
            hai.
          </h2>
          <p className="mt-4 max-w-xl leading-7 text-white/70">
            From quiet lakes to high passes, Safarnama helps you travel with
            planning, patience, and respect for the mountains.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[2px] text-[#f0b36b]">
            Explore
          </h3>
          <div className="mt-4 grid gap-3 text-sm font-bold text-white/75">
            <Link href="/#destinations" className="hover:text-[#f0b36b]">
              Destinations
            </Link>
            <Link href="/#planning" className="hover:text-[#f0b36b]">
              Planning
            </Link>
            <Link href="/inquiry" className="hover:text-[#f0b36b]">
              Start Inquiry
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[2px] text-[#f0b36b]">
            Local Note
          </h3>
          <p className="mt-4 leading-7 text-white/75">
            Paharon ka safar jaldi mein nahi hota. Mausam, rasta, aur local log
            sab ka ehtram zaroori hai.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5 max-sm:px-4">
        <div className="mx-auto flex max-w-6xl justify-between gap-3 text-sm font-bold text-white/55 max-sm:flex-col">
          <p>Safarnama - Northern Pakistan travel planning</p>
          <p>Travel slow. Leave the mountains cleaner.</p>
        </div>
      </div>
    </footer>
  );
}
