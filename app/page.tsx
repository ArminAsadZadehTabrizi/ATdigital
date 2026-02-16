import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Portfolio = dynamic(() => import("@/components/Portfolio"));
const About = dynamic(() => import("@/components/About"));
const Pricing = dynamic(() => import("@/components/Pricing"));
const Calculator = dynamic(() => import("@/components/Calculator"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const Contact = dynamic(() => import("@/components/Contact"));

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <About />
        <Pricing />
        <Calculator />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
