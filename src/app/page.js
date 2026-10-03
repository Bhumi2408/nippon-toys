
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Products />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
    </main>
  );
}
