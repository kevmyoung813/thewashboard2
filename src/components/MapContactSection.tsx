import { MapPin, Phone, Clock } from "lucide-react";

const MapContactSection = () => {
  return (
    <section className="py-16 md:py-20 bg-secondary">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-md min-h-[350px]">
            <iframe
              title="The Washboard Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.0!2d-88.3157!3d36.6035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x887b2e1e1e1e1e1e%3A0x0!2s605+S+12th+St%2C+Murray%2C+KY+42071!5e0!3m2!1sen!1sus!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "350px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              Visit The Washboard
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Address</p>
                  <p className="text-muted-foreground">605 S. 12th St</p>
                  <p className="text-muted-foreground">Murray, KY 42071</p>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=605+S+12th+St+Murray+KY+42071"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-medium text-sm hover:underline mt-1 inline-block"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Phone</p>
                  <a
                    href="tel:2707687058"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    270-768-7058
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Hours</p>
                  <p className="text-muted-foreground">Open Everyday</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapContactSection;
