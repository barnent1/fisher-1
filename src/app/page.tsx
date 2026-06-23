import Hero from "@/components/hero";
import { PartsShowcase } from "@/components/parts-showcase";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <PartsShowcase />
      </div>
    </main>
  );
}
