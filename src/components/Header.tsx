import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-[#18231d]/10 bg-[#fff9ed]/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 max-sm:px-4">
        <Link href="/" className="text-[22px] font-black">
          Safarnama
        </Link>

        <div className="flex gap-7 text-[15px] font-bold max-sm:hidden">
          <Link href="/#destinations" className="hover:text-[#c4532e]">
            Destinations
          </Link>
          <Link href="/#planning" className="hover:text-[#c4532e]">
            Planning
          </Link>
          <Link href="/inquiry" className="hover:text-[#c4532e]">
            Inquiry
          </Link>
        </div>
      </nav>
    </header>
  );
}
