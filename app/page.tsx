import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StoreFeatures from "@/components/StoreFeatures";
import Categories from "@/components/Categories";
import FreshGrindingSection from "@/components/FreshGrindingSection";
import Offers from "@/components/Offers";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <StoreFeatures />
      <Categories />
      <FreshGrindingSection />
      <Offers />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
