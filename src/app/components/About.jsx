import Image from "next/image";

// NOTE ON FACTS: every value below is sourced directly from the Nippon
// Toys Industries catalogue (cover page, About Us page & BIS mark on the
// back page). "Team Size" is the one field carried over from an earlier
// listing that the catalogue itself doesn't confirm — flagged in case you
// want to verify or drop it.
const FACTS = [
  { label: "Established", value: "1981" },
  { label: "Nature of Business", value: "Manufacturer, Supplier & Exporter" },
  { label: "Certifications", value: "ISO 9001 & ISO 14001" },
  { label: "BIS Registration", value: "IS 9873 · CM/L 8100106188" },
];

export default function About() {
  return (
    <section id="about" className="section-pad bg-white">
      <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <div className="relative rounded-[2rem] overflow-hidden shadow-[var(--shadow-cardHover)] border border-black/5 h-[400px] bg-gradient-to-br from-brand-teal to-brand-navy">
            <Image
              src="/about-image.png"
              alt="Nippon Toys plush teddy bear"
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-[var(--shadow-card)] border border-black/5 px-5 py-4 hidden sm:block">
            <p className="font-heading font-bold text-brand-orange text-2xl">1981</p>
            <p className="text-[11px] text-brand-navySoft font-semibold uppercase">Estd.</p>
          </div>
        </div>

        <div>
          <span className="chip">Who We Are</span>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-brand-navy mt-4">
            A New Delhi toy-house built on trust since 1981
          </h2>
          <p className="mt-5 text-brand-navySoft leading-relaxed">
            Founded and run by <strong className="text-brand-navy">Mr. Darshit Jain (Partner)</strong>,
            Nippon Toys Industries has spent over four decades manufacturing, supplying and
            exporting toys &amp; games from our facility in Bawana, New Delhi — from cricket and
            bat-ball sets to pool balls, hula hoops and educational play items, trusted by
            retailers and parents across India.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {FACTS.map((fact) => (
              <div key={fact.label} className="rounded-xl border border-black/5 bg-orange-50/40 px-4 py-3">
                <p className="text-[11px] font-heading font-semibold text-brand-teal uppercase tracking-wide">
                  {fact.label}
                </p>
                <p className="text-sm font-semibold text-brand-navy mt-1">{fact.value}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}