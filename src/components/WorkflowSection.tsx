const steps = [
  "Edit src/app/page.tsx or a component",
  "Run npm run dev",
  "Open the local URL",
  "Change text or styles and see updates",
];

export default function WorkflowSection() {
  return (
    <section id="workflow" className="py-[70px]">
      <div className="mx-auto grid max-w-6xl grid-cols-[0.8fr_1fr] gap-11 px-6 max-md:grid-cols-1 max-sm:px-4">
        <div>
          <p className="text-[13px] font-black tracking-[3px] text-[#d65a31] uppercase">
            Workflow
          </p>
          <h2 className="mt-3 text-[38px] leading-[1.15] font-black">
            How you work in Next.js.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4b554b]">
            You change files, the dev server rebuilds, and the browser shows
            updates. That quick feedback loop is the main comfort of Next.js.
          </p>
        </div>

        <ol className="grid list-none gap-4 p-0">
          {steps.map((step, index) => (
            <li
              key={step}
              className="flex gap-4 border-l-4 border-[#6aa184] bg-[#fffdf6] p-5"
            >
              <span className="font-mono text-[28px] font-black text-[#d65a31]">
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
