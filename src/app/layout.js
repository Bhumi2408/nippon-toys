import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title:
    "Nippon Toys Industries | Kids Cricket Sets, Pool Balls & Educational Toys",
  description:
    "Nippon Toys Industries — Manufacturer, Supplier & Exporter of Kids Cricket Sets, Pool Balls, Plastic Balls, Toy Guns, Educational Toys and more, from New Delhi, India.",
  icons: {
    icon: "/logos.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="bg-white text-brand-ink font-body">
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}