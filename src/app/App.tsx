import { Header } from "@/app/components/Header";
import { Hero } from "@/app/components/Hero";
import { Features } from "@/app/components/Features";
import { Screenshots } from "@/app/components/Screenshots";
import { Download } from "@/app/components/Download";
import { Footer } from "@/app/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      <Header />
      <Hero />
      <Features />
      <Screenshots />
      <Download />
      <Footer />
    </div>
  );
}
