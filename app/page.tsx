import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Now } from "./components/Now";
import { Projects } from "./components/Projects";
import { Publications } from "./components/Publications";
import { TechStack } from "./components/TechStack";

export default function Home() {
  return (
    <main className="relative mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="reveal-children grid grid-cols-12 gap-3 lg:gap-3">
        <Hero />
        <About />
        <Now />
        <Experience />
        <Projects />
        <div className="col-span-12 flex flex-col-reverse gap-3 lg:contents">
          <Publications />
          <TechStack />
        </div>
        <Education />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
