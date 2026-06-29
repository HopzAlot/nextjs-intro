const steps = [
  "Edit src/app/page.tsx or a component",
  "Run npm run dev",
  "Open the local URL",
  "Change text or styles and see updates",
];

export default function WorkflowSection() {
  return (
    <section id="workflow" className="workflow-section">
      <div className="workflow-layout">
        <div>
          <p className="eyebrow">Workflow</p>
          <h2>How you work in Next.js.</h2>
          <p className="section-text">
            You change files, the dev server rebuilds, and the browser shows
            updates. That quick feedback loop is the main comfort of Next.js.
          </p>
        </div>

        <ol className="steps-list">
          {steps.map((step, index) => (
            <li key={step}>
              <span>{index + 1}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
