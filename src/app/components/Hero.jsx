import Image from "next/image";
import { Download } from "lucide-react";

const CATEGORIES = [
  { label: "Educational Toys", img: "/educationals.png" },
  { label: "Plastic Cricket Sets", img: "/crickets.png"},
  { label: "Basketball Set", img: "/products/basket-junior-pvc.png" },
  { label: "Hockey Sets", img: "/products/kids-hockey-stick.png"},
  { label: "Swings", img: "/products/swing.png"}, 
  { label: "Toy Guns", img: "/products/blaze-shot-gun.png" },
  { label: "Ball Pool Balls", img: "/ball-pools.png"},
  { label: "Squeeze Toys", img: "/products/seal-world.png" },
  { label: "Endless Loop", img: "/products/endless.png" }, 
  { label: "Stepping Stones", img: "/products/stepping-stone.png" }, 
  { label: "Hula Hoops", img: "/products/kids-hula-rings.png" },
  { label: "Stacking Toys", img: "/products/baby-stacker.png" }, 
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-orange-50 via-white to-white">
      <div className="container-x pt-14 md:pt-20 pb-10 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="chip">GST &amp; Trustseal Verified Manufacturer</span>
          <h1 className="font-heading font-extrabold text-brand-navy text-4xl md:text-5xl xl:text-[3.4rem] leading-[1.1] mt-5">
            Toys built for
            <span className="text-brand-orange"> real childhood </span>
            fun.
          </h1>
          <p className="mt-5 text-brand-navySoft text-lg max-w-xl">
            Nippon Toys Industries manufactures and exports safe, colourful and durable play
            essentials — kids cricket sets, pool balls, educational toys and more — direct
            from our New Delhi factory to your shelf.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#products" className="btn-primary">Explore Products</a>
            <a
              href="/Nippon-Catalogue.pdf"
              download
              className="btn-outline inline-flex items-center gap-2"
            >
              <Download size={16} />
              Download Catalogue
            </a>
          </div>

          <div className="mt-9 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <div>
              <p className="font-heading font-bold text-2xl text-brand-navy">89%</p>
              <p className="text-brand-navySoft">Response Rate</p>
            </div>
            <div>
              <p className="font-heading font-bold text-2xl text-brand-navy">45+ Yrs</p>
              <p className="text-brand-navySoft">Manufacturing Experience</p>
            </div>
            <div>
              <p className="font-heading font-bold text-2xl text-brand-navy">8+</p>
              <p className="text-brand-navySoft">Product Categories</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-[2rem] overflow-hidden shadow-[var(--shadow-cardHover)] border border-black/5 bg-white">
            <div className="grid grid-cols-2 gap-1 p-1">
              <div className="relative col-span-2 h-56 md:h-64 rounded-t-[1.75rem] overflow-hidden bg-gradient-to-br from-brand-orange to-brand-yellow">
                <Image src="/hero1.png" alt="Nippon Toys kids cricket set" fill className="object-contain p-6" priority />
              </div>
              <div className="relative h-32 overflow-hidden bg-gradient-to-br from-brand-teal to-brand-tealDark">
                <Image src="/ball-pools.png" alt="Nippon Toys pool balls" fill className="object-contain p-4" />
              </div>
              <div className="relative h-32 rounded-br-[1.75rem] overflow-hidden bg-gradient-to-br from-brand-navy to-brand-navySoft">
                <Image src="/educationals.png" alt="Nippon Toys educational toys" fill className="object-contain p-4" />
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-[var(--shadow-card)] border border-black/5 px-5 py-4">
            <p className="font-heading font-bold text-brand-orange text-xl">Made in India 🇮🇳</p>
            <p className="text-xs text-brand-navySoft">Bawana, New Delhi</p>
          </div>
        </div>
      </div>

      {/* category strip — small real product photos instead of emoji */}
      <div className="container-x pb-14 md:pb-5">
        <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.label}
              className="group flex flex-col items-center gap-2 rounded-2xl border border-black/5 bg-white p-4 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-cardHover)] hover:-translate-y-1 transition-all text-center"
            >
              <span className="relative w-9 h-9 md:w-20 md:h-20 rounded-full bg-orange-50 overflow-hidden group-hover:scale-110 transition-transform">
                <Image
                  src={cat.img}
                  alt={cat.label}
                  fill
                  className="object-contain p-1.5"
                />
              </span>
              <span className="text-[12px] md:text-sm font-semibold text-brand-navySoft leading-tight">
                {cat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}