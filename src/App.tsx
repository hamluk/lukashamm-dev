import "./App.css";
import Header from "./components/ui/Header";
import Hero from "./components/ui/Hero";
import ProfilImage from "./assets/LukasHammProfil.jpeg";
import homepageTexts from "./data/homepage-texts.json";

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
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2025 Lukas Hamm. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
