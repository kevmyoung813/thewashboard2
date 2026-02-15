import { Check } from "lucide-react";
import { experienceFeatures } from "@/data/services";

const ExperienceSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              Laundry Should Feel Easy — Not Stressful
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              At The Washboard, we have created a space where laundry feels simple, safe, and comfortable. Clean equipment, a well-maintained facility, and helpful assistance are all part of the experience.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-8">
              We are proud to serve families, students, and professionals throughout Murray and the surrounding community.
            </p>
          </div>

          <div className="bg-accent rounded-2xl p-8 md:p-10">
            <h3 className="text-lg font-semibold text-primary mb-6">What to Expect</h3>
            <ul className="space-y-4">
              {experienceFeatures.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <Check size={14} className="text-primary-foreground" />
                  </span>
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
