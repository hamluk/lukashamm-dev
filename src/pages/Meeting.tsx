import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import MeetingsEmbed from "../components/ui/MeetingsEmbed";
import { useLanguage } from "../context/LanguageContext";

type Props = {};

function Meeting({}: Props) {
  const { texts } = useLanguage();
  return (
    <div>
      <Header />
      <section className="py-10 px-6 bg-gradient-to-br from-soft-blue/30 via-soft-blue/20 to-soft-blue/40">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-dark-text text-center">
            {texts.homepageTexts.Contact.intro_head}
          </h2>

          <MeetingsEmbed />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Meeting;
