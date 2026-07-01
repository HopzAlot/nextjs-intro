export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-[#17201a]/10 bg-[#fdfaf2]/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 max-sm:px-4">
        <a href="#" className="text-[22px] font-black">
          NextStart
        </a>

        <div className="flex gap-7 text-[15px] font-bold max-sm:hidden">
          <a href="#learn" className="hover:text-[#d65a31]">
            Learn
          </a>
          <a href="#workflow" className="hover:text-[#d65a31]">
            Workflow
          </a>
          <a href="#about" className="hover:text-[#d65a31]">
            About
          </a>
        </div>
      </nav>
    </header>
  );
}
