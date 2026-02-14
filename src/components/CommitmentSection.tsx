import { ShieldCheck } from "lucide-react";

const CommitmentSection = () => {
  return (
    <section className="py-20 md:py-28 bg-warm">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-6">
          <ShieldCheck size={28} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          Our Commitment to You
        </h2>
        <p className="text-foreground/80 leading-relaxed text-lg mb-4">
          We believe great customer service still matters. That's why we focus on maintaining a clean space, clear store guidelines, and a welcoming atmosphere for everyone who walks through our doors.
        </p>
        <p className="text-foreground/80 leading-relaxed text-lg">
          We want every visit to The Washboard to feel easy and dependable.
        </p>
      </div>
    </section>
  );
};

export default CommitmentSection;
