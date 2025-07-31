import PrimaryButton from "../form/PrimaryButton";
import SecondaryButton from "../form/SecondaryButton";

type Props = {
  greeting: string;
  headerText: string;
  text: string;
  footerText: string;
  image?: string;
  prm_button?: {
    text: string;
    link: string;
  };
  sec_button?: {
    text: string;
    link: string;
  };
};

function Hero({
  greeting,
  headerText,
  text,
  footerText,
  image,
  prm_button,
  sec_button,
}: Props) {
  return (
    <section className="flex flex-col lg:flex-row items-center bg-highlight-section inset-shadow-sm gap-10 text-dark-text h-[calc(100vh-100px)] lg:h-[calc(100vh-180px)] py-5 sm:py-10 md:py-15 px-7 xl:px-20 2xl:px-35">
      <div className="flex flex-col gap-6 lg:gap-8 items-center">
        <div className="flex flex-col items-baseline gap-3 max-w-2xl">
          <div className="max-w-md sm:min-w-sm sm:max-w-lg">
            <h2 className="text-xl sm:text-2xl font-semibold font-serif">
              {greeting}
            </h2>
            <h2 className="text-xl sm:text-2xl font-semibold font-serif">
              {headerText}
            </h2>
          </div>
          <h4 className="sm:max-w-2xl text-base sm:text-xl">{text}</h4>
          <h3 className="text-l italic">{footerText}</h3>
        </div>

        <div className="flex gap-6">
          <PrimaryButton title="Lass uns zusammenarbeiten"></PrimaryButton>
          <SecondaryButton title="Meine Projekte"></SecondaryButton>
        </div>
      </div>

      <img
        src={image}
        alt="Image"
        className="object-cover shadow-md w-110 sm:w-110 lg:w-120 xl:w-130 2xl:w-140 rounded-md"
      ></img>
    </section>
  );
}

export default Hero;
