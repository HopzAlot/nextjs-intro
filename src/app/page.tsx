import AboutSection from "@/components/AboutSection";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LearningSection from "@/components/LearningSection";
import WorkflowSection from "@/components/WorkflowSection";

export default function Home() {
  return (
    <main className="page">
      <Header />
      <Hero />
      <LearningSection />
      <WorkflowSection />
      <AboutSection />
    </main>
  );
}
