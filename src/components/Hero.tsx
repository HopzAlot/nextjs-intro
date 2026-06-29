export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="eyebrow">Intern Next.js Practice</p>
        <h1>Build one clean website and understand the project bones.</h1>
        <p className="hero-text">
          This small site teaches the three things you need first: where pages
          live, how JSX creates UI, and how CSS makes the design.
        </p>

        <div className="button-row">
          <a href="#learn" className="primary-button">
            Start Learning
          </a>
          <a href="#workflow" className="secondary-button">
            See Workflow
          </a>
        </div>
      </div>

      <div className="project-card">
        <p className="project-card-title">Project Map</p>
        <p>
          <strong>src/app/page.tsx</strong>
          <span>Home page route</span>
        </p>
        <p>
          <strong>src/app/layout.tsx</strong>
          <span>Shared page wrapper and metadata</span>
        </p>
        <p>
          <strong>src/app/globals.css</strong>
          <span>Global website styling</span>
        </p>
        <p>
          <strong>src/components</strong>
          <span>Reusable UI sections</span>
        </p>
      </div>
    </section>
  );
}
