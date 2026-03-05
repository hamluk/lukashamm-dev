import { useLanguage } from "../../context/LanguageContext";
import SectionIntro from "./SectionIntro";
import ContactEmbed from "./ContactEmbed";

type Props = {};

function Contact({}: Props) {
  const { texts } = useLanguage();
  /*   const [activeView, setActiveView] = useState<string>("form"); */

  return (
    <div id="contact" className="scroll-mt-32">
      <SectionIntro
        head={texts.homepageTexts.Contact.intro_head}
        text={texts.homepageTexts.Contact.intro_text}
      />
      <section
        id="contact"
        className="flex flex-col items-center gap-4 py-10 px-6 bg-gradient-to-br from-[#84a8b8]/30 via-[#84a8b8]/20 to-[#84a8b8]/40"
      >
        <div className="h-195 w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-2">
          <div className="h-full w-full">
            <ContactEmbed />
          </div>
        </div>
        {/* <SegmentedControl activeView={activeView} onUpdate={setActiveView} />
        <div className="h-195 w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-2">
          <AnimatePresence mode="wait">
            {activeView === "form" && (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="h-full w-full"
              >
                <ContactEmbed />
              </motion.div>
            )}

            {activeView === "meeting" && (
              <motion.div
                key="meeting"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="h-full w-full"
              >
                <MeetingsEmbed />
              </motion.div>
            )}
          </AnimatePresence> */}
      </section>
    </div>
  );
}

export default Contact;
