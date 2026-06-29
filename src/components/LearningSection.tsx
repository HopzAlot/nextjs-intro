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
    <section id="learn" className="learn-section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">What You Learn</p>
          <h2>Three ideas carry the whole starter project.</h2>
        </div>

        <div className="cards-grid">
          {learningCards.map((card) => (
            <article key={card.title} className="info-card">
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
