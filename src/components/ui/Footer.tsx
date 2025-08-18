import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import Links from "./Links";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="flex justify-between px-6 py-8 bg-light-green text-olive-green sm:text-sm text-xs text-center">
      <div className="flex flex-col items-baseline">
        <p className="font-semibold pb-2">Kontakt</p>
        <p>Lukas Hamm</p>
        <p>Tel: +43 699 19212901</p>
        <p>E-Mail: lukas@lukashamm.dev</p>
      </div>
      <div className="flex flex-col items-baseline">
        <a
          href="/impressum"
          className="font-semibold pb-2 hover:opacity-75 hover:cursor-pointer"
        >
          Impressum
        </a>
        <p>&copy; 2025 Lukas Hamm. All rights reserved.</p>
      </div>
      <div className="flex flex-col items-baseline">
        <p className=" pb-2 font-semibold">Links</p>
        <Links />
      </div>
    </footer>
  );
}

export default Footer;
