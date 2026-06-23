import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-12 space-y-20">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About Us</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Discover the story, the mission, and the people behind our organization.
        </p>
      </section>

      {/* Company Story & Business History */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">Company Story</h2>
          <p className="text-muted-foreground leading-relaxed">
            Founded with a vision to revolutionize the industry, our company began as a small team of 
            passionate innovators. We recognized a gap in the market for high-quality, accessible 
            solutions and set out to bridge that gap through relentless engineering and user-centric design.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Over the years, we have grown from a garage startup to a global presence, but our 
            commitment to excellence and our passion for solving complex problems remain unchanged.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">Business History</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our journey started in 2010 with the launch of our flagship product, which set a new 
            standard for performance and reliability. By 2015, we expanded our offerings to include 
            a comprehensive suite of enterprise tools, enabling businesses of all sizes to scale effectively.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The last decade has been marked by strategic growth, numerous industry awards, and 
            a steadfast dedication to our community. Today, we continue to innovate, pushing the 
            boundaries of what is possible in our field.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-muted rounded-2xl p-8 md:p-12 space-y-8 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold">Mission & Values</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Our core principles guide everything we do, from the way we write code to the way we 
            interact with our customers.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
          <div className="space-y-2">
            <h3 className="font-bold text-xl">Innovation</h3>
            <p className="text-muted-foreground">
              We strive to push boundaries and constantly seek better, more efficient ways to solve problems.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-xl">Integrity</h3>
            <p className="text-muted-foreground">
              Honesty, transparency, and accountability are at the heart of our business operations.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-xl">Customer-First</h3>
            <p className="text-muted-foreground">
              Our users are our north star. Every feature we build is designed to create real value for them.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-semibold">Meet Our Team</h2>
          <p className="text-muted-foreground">
            The talented individuals who make it all happen.
          </p>
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Jane Doe", role: "CEO & Founder" },
            { name: "John Smith", role: "CTO" },
            { name: "Alice Johnson", role: "Head of Design" },
            { name: "Bob Brown", role: "Lead Engineer" },
          ].map((member) => (
            <div key={member.name} className="p-6 border rounded-xl text-center space-y-3 hover:border-primary transition-colors">
              <div className="size-20 bg-muted rounded-full mx-auto" />
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-muted-foreground text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-6 pt-8">
        <h2 className="text-2xl font-semibold">Want to join our journey?</h2>
        <div className="flex justify-center gap-4">
          <Button variant="default" size="lg">Contact Us</Button>
          <Button variant="outline" size="lg">View Careers</Button>
        </div>
      </section>
    </main>
  );
}
