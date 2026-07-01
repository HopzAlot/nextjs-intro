const learningCards = [
  {
    title: "App Router",
    text: "The file src/app/page.tsx becomes the home route, which users see at /.",
  },
  {
    title: "Components",
    text: "Each section is split into its own component, keeping the page file easy to read.",
  },
  {
    title: "CSS Styling",
    text: "Class names connect JSX to normal CSS rules inside globals.css.",
  },
];

export default function LearningSection() {
  return (
    <section id="learn" className="bg-[#fffdf6] py-[70px]">
      <div className="mx-auto max-w-6xl px-6 max-sm:px-4">
        <div className="max-w-[680px]">
          <p className="text-[13px] font-black tracking-[3px] text-[#d65a31] uppercase">
            What You Learn
          </p>
          <h2 className="mt-3 text-[38px] leading-[1.15] font-black">
            Three ideas carry the whole starter project.
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-5 max-md:grid-cols-1">
          {learningCards.map((card) => (
            <article
              key={card.title}
              className="border-2 border-[#17201a] bg-[#f7f3ea] p-6"
            >
              <h3 className="text-[22px] font-black">{card.title}</h3>
              <p className="mt-3 leading-7 text-[#4b554b]">{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
