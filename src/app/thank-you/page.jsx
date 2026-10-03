import Link from "next/link";
import { CheckCircle2, Phone, MessageCircle, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Thank You | Nippon Toys Industries",
  description: "Thanks for reaching out to Nippon Toys Industries — we'll get back to you shortly.",
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-50 via-white to-white px-5">
      <div className="max-w-lg w-full text-center bg-white rounded-[2rem] border border-black/5 shadow-[var(--shadow-cardHover)] p-10 md:p-12">
        <div className="w-16 h-16 mx-auto rounded-full bg-brand-teal/10 flex items-center justify-center mb-6">
          <CheckCircle2 size={34} className="text-brand-tealDark" />
        </div>
        <span className="chip">Enquiry Received</span>
        <h1 className="font-heading font-extrabold text-3xl md:text-4xl text-brand-navy mt-4">Thank you for reaching out!</h1>
        <p className="text-brand-navySoft mt-4 leading-relaxed">
          Your enquiry has landed with our team at Nippon Toys Industries. We usually respond within a day
          with pricing and catalogue details — for anything urgent, feel free to call or WhatsApp us directly.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
          <a href="tel:+918047640736" className="btn-outline"><Phone size={16} /> Call Us</a>
          <a href="https://wa.me/918047640736" target="_blank" rel="noreferrer" className="btn-primary"><MessageCircle size={16} /> WhatsApp Us</a>
        </div>
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-brand-navySoft hover:text-brand-orange mt-8 transition-colors">
          <ArrowLeft size={15} /> Back to Home
        </Link>
      </div>
    </main>
  );
}