import Image from "next/image";
import { Phone, FileText, MapPin, Heart } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const PRODUCT_LINKS = [
  "Kids Cricket Sets",
  "Toy Guns",
  "Activity Toys",
  "Educational Toys",
  "Squeeze Toys",
  "Hula Hoops"
];

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Why Us", href: "#why" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white/80">
      <div className="container-x py-16 grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 bg-white/5">
              <Image
                src="/logos.png"
                alt="Nippon Toys Industries logo"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <p className="font-heading font-bold text-white">Nippon Toys</p>
              <p className="text-[10px] tracking-wide text-brand-yellow font-semibold uppercase">
                Industries · New Delhi
              </p>
            </div>
          </div>
          <p className="text-sm leading-relaxed">
            Manufacturer, supplier &amp; exporter of safe and joyful toys for
            children — cricket sets, pool balls, educational toys and more, made
            in New Delhi, India.
          </p>
        </div>

        <div>
          <h5 className="font-heading font-semibold text-white mb-4">
            Quick Links
          </h5>
          <ul className="space-y-2.5 text-sm">
            {QUICK_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="hover:text-brand-yellow transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="font-heading font-semibold text-white mb-4">
            Our Collection
          </h5>
          <ul className="space-y-2.5 text-sm">
            {PRODUCT_LINKS.map((p) => (
              <li key={p}>
                <a
                  href="#products"
                  className="hover:text-brand-yellow transition-colors"
                >
                  {p}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="font-heading font-semibold text-white mb-4">
            Reach Us
          </h5>
          <div className="flex gap-3 text-sm leading-relaxed">
            <MapPin size={16} className="text-brand-yellow shrink-0 mt-0.5" />
            <p>
              Plot No. 31, Gali No. 2, Lalita Block,
              <br />
              Shastri Nagar, Delhi – 110052
            </p>
          </div>
          <div className="flex gap-3 text-sm leading-relaxed mt-3">
            <MapPin size={16} className="text-brand-yellow shrink-0 mt-0.5" />
            <p>
              D-189, Sector-5, DSIIDC Industrial Area,
              <br />
              Bawana, Delhi – 110039
            </p>
          </div>
          <div className="flex items-center gap-3 text-sm mt-3">
            <Phone size={16} className="text-brand-yellow shrink-0" />
            <a
              href="tel:+919310843500"
              className="hover:text-brand-yellow transition-colors"
            >
              +91-93108-43500 · +91-99583-19067
            </a>
          </div>

        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-5 flex flex-wrap items-center justify-between gap-2 text-xs">
          <span>© 2026 Nippon Toys Industries. All Rights Reserved. | Powered By <Link href="https://www.cybertricksmedia.com/" className="text-orange-600">Cybertricksmedia Pvt Ltd</Link></span>
          <span className="flex items-center gap-1.5">
            Made with{" "}
            <Heart size={12} className="fill-brand-orange text-brand-orange" />{" "}
            for little hands everywhere.
          </span>
        </div>
      </div>
    </footer>
  );
}
