import "./App.css";
import Header from "./components/ui/Header";
import Hero from "./components/ui/Hero";
import Footer from "./components/ui/Footer";
import Achievments from "./components/ui/Achievments";
import { LanguageProvider } from "./context/LanguageProvider";

function App() {
  return (
    <LanguageProvider>
      ≈
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <Hero />
          <Achievments />
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
