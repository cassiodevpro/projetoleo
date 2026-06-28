import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EcosystemGrid from "@/components/EcosystemGrid";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <EcosystemGrid />
      </main>
      <WhatsAppFloat phone="5561995638827" />
    </>
  );
}
