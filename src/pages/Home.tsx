import Header from "../components/ui/Header";
import Hero from "../components/ui/Hero";
import Achievements from "../components/ui/Achievements";
import Footer from "../components/ui/Footer";
import About from "../components/ui/About";
import Packages from "../components/ui/Packages";

type Props = {};

export default function Home({}: Props) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 w-full">
        <Hero />
        <About />
        <Packages />
        <Achievements />
      </main>

      <Footer />
    </div>
  );
}
