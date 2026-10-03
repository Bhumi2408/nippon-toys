"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MapPin, Phone, FileText, Send, Mail } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const WEB3FORMS_ACCESS_KEY_1 = process.env.NEXT_PUBLIC_WEB3FORMS_KEY_1 ?? "bf1ce934-c7ab-42a1-a01c-d4417204cf15";
const WEB3FORMS_ACCESS_KEY_2 = process.env.NEXT_PUBLIC_WEB3FORMS_KEY_2 ?? "4fae5a08-b6d5-40f8-aec9-48b32fd7d1b4";

const SOCIAL_LINKS = [
  { icon: faWhatsapp, label: "WhatsApp", href: "https://wa.me/919310843500", hover: "hover:bg-[#25D366]" },
  { icon: faFacebookF, label: "Facebook", href: "https://www.facebook.com/share/1Cf9MSWVo3/", hover: "hover:bg-[#1877F2]" },
  { icon: faInstagram, label: "Instagram", href: "https://www.instagram.com/nippontoysindustries?igsh=MTl5dW03Z2o5NXdpNQ==", hover: "hover:bg-[#E1306C]" },
];

const INFO_ROWS = [
  { icon: MapPin, label: "Registered Office", value: "Plot No. 31, Gali No. 2, Lalita Block, Shastri Nagar, Delhi – 110052, India", color: "bg-brand-orange/15 text-brand-orange" },
  { icon: MapPin, label: "Factory / Manufacturing Unit", value: "D-189, Sector-5, DSIIDC Industrial Area, Bawana, Delhi – 110039, India", color: "bg-brand-teal/15 text-brand-teal" },
  { icon: Phone, label: "Call Us", value: "+91-93108-43500 · +91-99583-19067", href: "tel:+919310843500", color: "bg-brand-yellow/15 text-brand-yellow" },
  { icon: Mail, label: "Email", value: "nippontoys@hotmail.com", color: "bg-brand-orange/15 text-brand-orange" },
];

const PRODUCT_CATEGORIES = [
  "Kids Cricket Sets", "Pool & Plastic Balls", "Toy Guns", "Activity Toys",
  "Educational Toys", "Kids Playing Rings & Hockey Sticks", "Squeeze Toys",
  "Kids Bowling Set", "Kids Baseball Set", "Kids Basketball Set", "Bulk / Export Enquiry",
];

export default function Contact() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const form = e.currentTarget;
    const formData = new FormData(form);

    const keys = ["bf1ce934-c7ab-42a1-a01c-d4417204cf15", "4fae5a08-b6d5-40f8-aec9-48b32fd7d1b4"].filter(Boolean);

    if (keys.length === 0) {
      setError("Form isn't configured yet — please call us directly.");
      setLoading(false);
      return;
    }

    try {
      const submissions = keys.map((key) => {
        const payload = new FormData();
        for (const [k, v] of formData.entries()) payload.append(k, v);
        payload.append("access_key", key);
        payload.append("subject", "New Enquiry — Nippon Toys Industries Website");
        return fetch("https://api.web3forms.com/submit", { method: "POST", body: payload }).then((res) => res.json());
      });

      const results = await Promise.all(submissions);
      const success = results.some((r) => r.success);

      if (success) {
        form.reset();
        router.push("/thank-you");
      } else {
        setError("Something went wrong. Please try again or call us directly.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-pad bg-gradient-to-b from-orange-50/40 via-white to-white">
      <div className="container-x">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="chip">Get In Touch</span>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-brand-navy mt-4">Let&apos;s talk toys!</h2>
          <p className="mt-3 text-brand-navySoft">Whether it&apos;s a bulk retail order, a school enquiry or an export quote — we&apos;d love to hear from you.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-0 rounded-[2rem] overflow-hidden shadow-[var(--shadow-cardHover)] border border-black/5">
          <div className="lg:col-span-2 relative bg-brand-navy text-white p-8 md:p-10 overflow-hidden">
            <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-brand-orange/10 blur-2xl" />
            <div className="absolute -bottom-20 -left-10 w-56 h-56 rounded-full bg-brand-teal/10 blur-2xl" />

            <div className="relative">
              <h3 className="font-heading font-bold text-xl">Nippon Toys Industries</h3>
              <p className="text-sm text-white/60 mt-2 leading-relaxed">Manufacturer · Supplier · Exporter of quality kids&apos; toys since 1981.</p>

              <div className="mt-8 space-y-6">
                {INFO_ROWS.map((row) => (
                  <div key={row.label} className="flex gap-4">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${row.color}`}>
                      <row.icon size={18} strokeWidth={2.25} />
                    </div>
                    <div>
                      <p className="text-xs font-heading font-semibold text-white/50 uppercase tracking-wide">{row.label}</p>
                      <p className="text-sm text-white/90 mt-1 leading-relaxed">{row.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3 mt-10 pt-8 border-t border-white/10">
                {SOCIAL_LINKS.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
                    className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-all hover:-translate-y-0.5 hover:text-white ${s.hover}`}>
                    <FontAwesomeIcon icon={s.icon} className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-3 bg-white p-8 md:p-10">
            <h3 className="font-heading font-bold text-xl text-brand-navy">Send an Enquiry</h3>
            <p className="text-sm text-brand-navySoft mt-1 mb-7">Fill this in and our team will get back with pricing &amp; catalogue.</p>

            <div className="grid sm:grid-cols-2 gap-5">
              <Field name="name" label="Full Name" type="text" placeholder="Your name" required />
              <Field name="phone" label="Mobile Number" type="tel" placeholder="+91" required />
              <Field name="email" label="Email" type="email" placeholder="you@email.com" />
              <Field name="city" label="City" type="text" placeholder="Your city" />
            </div>

            <div className="mt-5">
              <label className="block text-xs font-heading font-semibold text-brand-navy mb-2">I&apos;m interested in</label>
              <select name="category" className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-brand-navy shadow-sm transition-colors focus:outline-none focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10">
                {PRODUCT_CATEGORIES.map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>

            <div className="mt-5">
              <label className="block text-xs font-heading font-semibold text-brand-navy mb-2">Your Requirement</label>
              <textarea name="message" rows={4} placeholder="Tell us the quantity and details you need..."
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm shadow-sm transition-colors focus:outline-none focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 resize-y" />
            </div>

            <button type="submit" disabled={loading} className="btn-primary w-full mt-7 justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed">
              {loading ? "Sending..." : (<><Send size={16} /> Send Enquiry</>)}
            </button>

            {error && <p className="mt-4 rounded-xl bg-rose-50 text-rose-600 text-sm font-semibold text-center py-3">{error}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, ...props }) {
  return (
    <div>
      <label className="block text-xs font-heading font-semibold text-brand-navy mb-2">{label}</label>
      <input {...props} className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm shadow-sm transition-colors focus:outline-none focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10" />
    </div>
  );
}