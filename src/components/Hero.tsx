export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl grid-cols-[1.1fr_0.9fr] items-center gap-11 px-6 py-20 max-md:grid-cols-1 max-sm:px-4 max-sm:py-14">
      <div>
        <p className="text-[13px] font-black tracking-[3px] text-[#d65a31] uppercase">
          Intern Next.js Practice
        </p>
        <h1 className="mt-4 max-w-[760px] text-[58px] leading-[1.05] font-black max-sm:text-[42px]">
          Build one clean website and understand the project bones.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4b554b]">
          This small site teaches the three things you need first: where pages
          live, how JSX creates UI, and how CSS makes the design.
        </p>

        <div className="mt-8 flex gap-3.5 max-sm:flex-col">
          <a
            href="#learn"
            className="inline-flex justify-center bg-[#17201a] px-6 py-3.5 text-sm font-black text-white shadow-[6px_6px_0_#d65a31] transition hover:-translate-y-0.5"
          >
            Start Learning
          </a>
          <a
            href="#workflow"
            className="inline-flex justify-center border-2 border-[#17201a] px-6 py-3.5 text-sm font-black transition hover:bg-[#fff7df]"
          >
            See Workflow
          </a>
        </div>
      </div>

      <div className="border-2 border-[#17201a] bg-[#fffdf6] p-7 shadow-[12px_12px_0_#6aa184]">
        <p className="text-[13px] font-black tracking-[3px] text-[#6aa184] uppercase">
          Project Map
        </p>
        <p className="mt-5">
          <strong className="block font-mono text-[#d65a31]">
            src/app/page.tsx
          </strong>
          <span className="mt-1 block text-[#4b554b]">Home page route</span>
        </p>
        <p className="mt-5">
          <strong className="block font-mono text-[#d65a31]">
            src/app/layout.tsx
          </strong>
          <span className="mt-1 block text-[#4b554b]">
            Shared page wrapper and metadata
          </span>
        </p>
        <p className="mt-5">
          <strong className="block font-mono text-[#d65a31]">
            src/app/globals.css
          </strong>
          <span className="mt-1 block text-[#4b554b]">
            Tailwind setup and global styles
          </span>
        </p>
        <p className="mt-5">
          <strong className="block font-mono text-[#d65a31]">
            src/components
          </strong>
          <span className="mt-1 block text-[#4b554b]">
            Reusable UI sections
          </span>
        </p>
      </div>
    </section>
  );
}
