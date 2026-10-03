const TESTIMONIALS = [
  {
    quote:
      "We stock Nippon's cricket sets in our store and they're always the first to sell out. Sturdy, colourful and priced just right for parents.",
    name: "Rakesh Mehta",
    role: "Toy Retailer, Delhi",
    initial: "R",
    color: "bg-brand-orange",
  },
  {
    quote:
      "My daughter's hula rings and ball set are still going strong after a year of daily play. Genuinely good quality plastic, no sharp edges.",
    name: "Sunita Verma",
    role: "Parent, Gurugram",
    initial: "S",
    color: "bg-brand-teal",
  },
  {
    quote:
      "Ordered educational blocks and bowling sets in bulk for our playschool — on-time delivery and the kids absolutely love them.",
    name: "Ananya Kids Academy",
    role: "Playschool, Noida",
    initial: "A",
    color: "bg-brand-navy",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad bg-orange-50/30">
      <div className="container-x">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="chip">Kind Words</span>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-brand-navy mt-4">
            Loved by parents, trusted by retailers
          </h2>
          <p className="mt-3 text-brand-navySoft">
            A few notes from the people who&apos;ve played, sold and grown up with our toys.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl border border-black/5 shadow-card p-6">
              <p className="text-brand-yellow tracking-widest mb-3">★★★★★</p>
              <p className="text-sm text-brand-navySoft leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3 mt-6">
                <div
                  className={`w-10 h-10 rounded-full ${t.color} text-white font-heading font-bold flex items-center justify-center`}
                >
                  {t.initial}
                </div>
                <div>
                  <p className="font-heading font-semibold text-sm text-brand-navy">{t.name}</p>
                  <p className="text-xs text-brand-navySoft">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
