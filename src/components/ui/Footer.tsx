import Links from "./Links";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="flex flex-col h-60 md:h-75 lg:h-90 relative overflow-hidden  text-dark-text text-sm md:text-base">
      <div
        className="absolute left-1/4 xl:left-2/7 bottom-0 translate-y-1/9 -translate-x-1/2 z-20
                  w-60 h-30 md:w-80 md:h-40 lg:w-100 lg:h-50
                   bg-soft-blue
                  rounded-t-full"
      />
      <div
        className="absolute left-2/3 xl:left-4/7 bottom-0 translate-y-1/9 -translate-x-1/2 
                  w-130 h-65 md:w-160 md:h-80 lg:w-200 lg:h-100
                  bg-light-green 
                  rounded-t-full"
      />
      <div
        className="relative mt-auto flex justify-around px-6 py-7 z-30
                  lg:px-16 xl:px-20 2xl:px-24"
      >
        <div className="hidden md:flex flex-col items-baseline">
          <p className="font-semibold pb-2">Kontakt</p>
          <p>Lukas Hamm</p>
          <p>Tel: +43 699 19212901</p>
          <p>E-Mail: lukas@lukashamm.dev</p>
          <a
            href="/CV_LukasHamm.pdf"
            download="Lukas_CV.pdf"
            className="underline"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </div>
        <div className="flex flex-col items-baseline">
          <a
            href="/impressum"
            className="font-semibold pb-2 hover:opacity-75 hover:cursor-pointer hover:underline"
          >
            Impressum
          </a>
          <a
            href="/data-privacy"
            className="font-semibold pb-2 hover:opacity-75 hover:cursor-pointer hover:underline"
          >
            Datenschutz
          </a>
          <a
            href="/data-privacy-request"
            className="font-semibold pb-2 hover:opacity-75 hover:cursor-pointer hover:underline"
          >
            Datenschutzanfragen
          </a>
          <p>&copy; 2025 Lukas Hamm. All rights reserved.</p>
        </div>
        <div className="flex flex-col items-baseline">
          <p className=" pb-2 font-semibold">Links</p>
          <a
            href="/"
            className="font-semibold pb-1 hover:opacity-75 hover:underline hover:cursor-pointer"
          >
            Home
          </a>
          <Links addClassName="text-lg md:text-xl lg:text-2xl" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
