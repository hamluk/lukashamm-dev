import "./App.css";
import Header from "./components/ui/Header";
import Hero from "./components/ui/Hero";
import ProfilImage from "./assets/LukasHammProfil.jpeg";
import homepageTexts from "./data/homepage-texts.json";
import Footer from "./components/ui/Footer";
import Achievments from "./components/ui/Achievments";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header
        title={homepageTexts.Header.head}
        subtitle={homepageTexts.Header.description}
      ></Header>

      <main className="flex-1">
        <Hero
          greeting={homepageTexts.Hero.greeting}
          headerText={homepageTexts.Hero.head}
          text={homepageTexts.Hero.body}
          footerText={homepageTexts.Hero.footer}
          image={ProfilImage}
        />
        <Achievments />
      </main>

      <Footer />
    </div>
  );
}

export default App;
