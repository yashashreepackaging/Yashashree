import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyChoose from "@/components/WhyChoose";
import Industries from "@/components/Industries";
import Products from "@/components/Products";
import Facility from "@/components/Facility";
import Flow from "@/components/Flow";
import Quality from "@/components/Quality";
import Custom from "@/components/Custom";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <WhyChoose />
      <Products />
      <Industries />
      <Facility />
      <Flow />
      <Quality />
      <Custom />
      <Contact />
      <WhatsAppButton />
      <Footer />
    </>
  );
}
