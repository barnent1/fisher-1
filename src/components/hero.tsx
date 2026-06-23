import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center px-4 py-24 text-center sm:py-32 lg:py-40">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          Build your vision <span className="text-primary">faster than ever</span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl max-w-2xl mx-auto">
          The ultimate platform for developers to deploy, scale, and manage their 
          applications with unprecedented ease and performance.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button size="lg" className="px-8 py-6 text-lg">
            Get Started Today
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
