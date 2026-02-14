import { Heart } from "lucide-react";
import murrayInterior from "@/assets/murray-interior.jpg";

const LocalTrustSection = () => {
  return (
    <section className="py-20 md:py-28 bg-warm">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-6">
              <Heart size={28} className="text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
              Serving Murray with Care
            </h2>
            <p className="text-foreground/80 leading-relaxed text-lg">
              We're not just another laundromat. We're part of the Murray community. Whether you're a local family, a Murray State student, or new to town, we're here to make laundry simple and dependable — right here in Calloway County.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={murrayInterior}
              alt="Inside The Washboard laundromat in Murray, KY — spacious seating and modern washers"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalTrustSection;
