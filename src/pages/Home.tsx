import Header from "../components/ui/Header";
import Hero from "../components/ui/Hero";
import Footer from "../components/ui/Footer";
import About from "../components/ui/About";
import Packages from "../components/ui/Packages";
import SectionIntro from "../components/ui/SectionIntro";
import { useLanguage } from "../context/LanguageContext";
import FAQ from "../components/ui/FAQ";
import Contact from "../components/ui/Contact";

type Props = {};

export default function Home({}: Props) {
  const { texts } = useLanguage();
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 w-full">
        <Hero />
        <Packages />
        <FAQ />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
