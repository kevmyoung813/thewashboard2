import { MapPin, Phone, Clock } from "lucide-react";
import { contactInfo } from "@/data/contact";

const MapContactSection = () => {
  return (
    <section className="py-16 md:py-20 bg-secondary">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-md min-h-[350px]">
            <iframe
              title="The Washboard Location"
              src={contactInfo.googleMapsEmbedUrl}
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
                  <p className="text-muted-foreground">{contactInfo.address.street}</p>
                  <p className="text-muted-foreground">
                    {contactInfo.address.city}, {contactInfo.address.state} {contactInfo.address.zip}
                  </p>
                  <a
                    href={contactInfo.googleMapsUrl}
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
                    href={contactInfo.phoneHref}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {contactInfo.phoneFormatted}
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Hours</p>
                  <p className="text-muted-foreground">{contactInfo.hours}</p>
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
