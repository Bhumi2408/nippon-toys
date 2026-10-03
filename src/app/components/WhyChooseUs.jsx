import { ShieldCheck, BadgeCheck, Factory, Truck, Zap, IndianRupee } from "lucide-react";

const REASONS = [
  { icon: ShieldCheck, title: "Safe, Non-Toxic Materials", desc: "Child-safe plastics and finishes tested for everyday rough-and-tumble play.", color: "bg-brand-orange/10 text-brand-orangeDark" },
  { icon: BadgeCheck, title: "GST & Trustseal Verified", desc: "Registered partnership firm with verified GST, IEC & Trustseal credentials.", color: "bg-brand-teal/10 text-brand-tealDark" },
  { icon: Factory, title: "Direct From Our Factory", desc: "In-house manufacturing in Bawana, New Delhi for better quality control & pricing.", color: "bg-brand-yellow/20 text-yellow-700" },
  { icon: Truck, title: "Pan-India & Export Ready", desc: "Reliable bulk supply for retailers, distributors and international buyers.", color: "bg-brand-orange/10 text-brand-orangeDark" },
  { icon: Zap, title: "89% Fast Response Rate", desc: "Quick quotes and clear communication — we don't leave enquiries waiting.", color: "bg-brand-teal/10 text-brand-tealDark" },
  { icon: IndianRupee, title: "Honest, Affordable Pricing", desc: "Quality toys priced fairly for schools, retailers and everyday families.", color: "bg-brand-yellow/20 text-yellow-700" },
];

const STRIP = [
  { label: "Estd. 1981" },
  { label: "ISO 9001 & 14001 Certified" },
  { label: "BIS Certified · IS 9873" },
  { label: "Manufacturer & Exporter" },
  { label: "Free Delivery Above ₹499" },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="section-pad bg-white">
      <div className="container-x">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="chip">Why Families &amp; Retailers Choose Us</span>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-brand-navy mt-4">
            Play-safe promises, kept every single time
          </h2>
          <p className="mt-3 text-brand-navySoft">
            Everything we make is guided by one rule: if it&apos;s not safe enough for our own
            kids, it doesn&apos;t leave the factory.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className="rounded-2xl border border-black/5 p-6 hover:shadow-[var(--shadow-cardHover)] hover:-translate-y-1 transition-all"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${r.color}`}>
                  <Icon size={22} strokeWidth={2.25} />
                </div>
                <h3 className="font-heading font-bold text-brand-navy">{r.title}</h3>
                <p className="text-sm text-brand-navySoft mt-2 leading-relaxed">{r.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Trust strip — flex (content-sized items) instead of an equal-width
            grid. With a grid, every column is forced to the same width, so a
            short label like "Estd. 1981" sits inside a wide column with a
            big empty gap around it, while a long label like "Free Delivery
            Above ₹499" nearly fills its column — that mismatch is exactly
            what produced the "big gap on the left, tiny gap on the right"
            look. Flex sizes each pill to its own text, so spacing stays
            even no matter how long each label is. */}
        <div className="mt-14 rounded-2xl bg-brand-navy text-white py-8 px-6 md:px-10 flex flex-wrap justify-evenly items-center gap-x-8 gap-y-6 text-center overflow-hidden">
          {STRIP.map((s) => (
            <p
              key={s.label}
              className="font-heading font-semibold text-sm md:text-base whitespace-nowrap"
            >
              {s.label}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}