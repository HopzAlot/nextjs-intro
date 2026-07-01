import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LearningSection from "@/components/LearningSection";
import WorkflowSection from "@/components/WorkflowSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <LearningSection />
      <WorkflowSection />
      <Footer />
    </main>
  );
}
