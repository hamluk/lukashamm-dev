import Footer from "../components/ui/Footer";
import Header from "../components/ui/Header";

type Props = {};

export default function Impressum({}: Props) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 text-dark-text p-10">
        <p className="text-3xl font-semibold pb-3">Impressum</p>
        <p>Lukas Hamm</p>
        <p>Einzelunternehmen im Bereich IT-Software und Dienstleistungen</p>
        <p>Prof.-Rainer-Straße 19</p>
        <p>7062 Sankt Margarethen</p>
        <p>Österreich</p>
        <br />
        <p>Tel: +43 699 19212901</p>
        <p>E-Mail: lukas@lukashamm.dev</p>
        <br />
        <p>Berufsrecht:</p>
        <div className="flex gap-1">
          <a
            href="https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10007517"
            className="underline text-dark-green"
          >
            Gewerbeordnung:
          </a>
          <a
            href="http://www.ris.bka.gv.at/"
            className="underline text-dark-green"
          >
            www.ris.bka.gv.at
          </a>
        </div>
        <br />
        <p>Bezirkshauptmannschaft Eisenstadt</p>
      </div>
      <Footer />
    </div>
  );
}
