import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Hero />
      <Stats />
      <Timeline />
      <Projects />
      <Footer />
    </main>
  );
}
