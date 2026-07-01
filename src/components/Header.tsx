export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-[#18231d]/10 bg-[#fff9ed]/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 max-sm:px-4">
        <a href="#" className="text-[22px] font-black">
          Safarnama
        </a>

        <div className="flex gap-7 text-[15px] font-bold max-sm:hidden">
          <a href="#destinations" className="hover:text-[#c4532e]">
            Destinations
          </a>
          <a href="#planning" className="hover:text-[#c4532e]">
            Planning
          </a>
          <a href="#contact" className="hover:text-[#c4532e]">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
