import Header from "../components/ui/Header";
import Hero from "../components/ui/Hero";
import Achievements from "../components/ui/Achievements";
import Footer from "../components/ui/Footer";

type Props = {};

export default function Home({}: Props) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <Hero />
        <Achievements />
      </main>

      <Footer />
    </div>
  );
}
