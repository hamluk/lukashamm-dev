import { useLanguage } from "../../context/LanguageContext";
import ProfilImage from "/assets/LukasHamm.jpg";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  const { texts } = useLanguage();

  return (
    <section
      id="about"
      className="py-24 lg:py-24 relative bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/package_cover.jpeg')" }}
    >
      <div
        id="about"
        className="max-w-6xl mx-auto relative bg-cover bg-center items-center justify-around flex flex-col md:flex-row text-dark-text gap-6 py-10"
      >
        <motion.div
          className="flex flex-col gap-4 bg-highlight-section p-4 w-full shadow-md rounded-lg"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-2xl text-dark-text font-semibold md:text-4xl font-serif">
            {texts.homepageTexts.About.head}
          </h2>
          <h4 className="text-lg md:text-xl">
            {texts.homepageTexts.About.body}
          </h4>
          <h4 className="text-lg md:text-xl">
            {texts.homepageTexts.About.sub_body}
          </h4>
          <h4 className="text-lg md:text-xl">
            {texts.homepageTexts.About.end_body}
          </h4>
          <div className="pt-1 text-lg md:text-xl font-semibold">
            <div className="flex flex-row justify-between items-center">
              <span>{texts.homepageTexts.About.cta}</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
        >
          <img
            src={ProfilImage}
            alt="Image"
            className="shadow-md max-w-xs md:max-w-90 rounded-xl"
          ></img>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
