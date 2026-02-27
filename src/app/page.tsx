import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OverthinkingCorner from "@/components/OverthinkingCorner";
import ClientMarquee from "@/components/ClientMarquee";
import BentoGrid from "@/components/BentoGrid";
import ImmersiveImage from "@/components/ImmersiveImage";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="grain-overlay">
      <Navbar />
      <Hero />
      <OverthinkingCorner />
      <ImmersiveImage
        imageUrl="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1600&q=80"
        alt="Cinematic moment"
        quote={`"Karya terbaik lahir dari momen jeda"`}
        attribution="— sebat's manifesto"
      />
      <BentoGrid limit={4} showViewAll />
      <ClientMarquee />
      <Footer />
    </div>
  );
}
