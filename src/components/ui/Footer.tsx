import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import Links from "./Links";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="flex justify-between px-6 py-8 lg:px-16 xl:px-20 2xl:px-24 bg-light-green text-olive-green sm:text-sm text-xs">
      <div className="flex flex-col items-baseline">
        <p className="font-semibold pb-2">Kontakt</p>
        <p>Lukas Hamm</p>
        <p>Tel: +43 699 19212901</p>
        <p>E-Mail: lukas@lukashamm.dev</p>
      </div>
      <div className="flex flex-col items-baseline">
        <a
          href="/impressum"
          className="font-semibold pb-2 hover:opacity-75 hover:cursor-pointer hover:underline"
        >
          Impressum
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
        <Links />
      </div>
    </footer>
  );
}

export default Footer;
