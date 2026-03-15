import { ScrollyCanvas } from "@/components/ScrollyCanvas";
import { Overlay } from "@/components/Overlay";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative bg-[#121212]">
      {/* Scrollytelling Section */}
      <section className="relative">
        <ScrollyCanvas frameCount={192} />
        <Overlay />
      </section>

      {/* Projects Grid Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />
    </main>
  );
}
