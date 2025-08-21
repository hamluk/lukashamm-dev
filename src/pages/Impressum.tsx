import Footer from "../components/ui/Footer";
import Header from "../components/ui/Header";

type Props = {};

export default function Impressum({}: Props) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 text-dark-text p-10 lg:px-20 w-110">
        <p className="text-3xl font-semibold pb-3">Impressum</p>
        <p>Lukas Hamm</p>
        <p>Prof.-Rainer-Straße 19</p>
        <p>7062 Sankt Margarethen</p>
        <p>Österreich</p>
        <br />
        <p>Tel: +43 699 19212901</p>
        <p>E-Mail: lukas@lukashamm.dev</p>
        <br />
        <p>Einzelunternehmen:</p>
        <p>
          Dienstleistungen in der automatischen Datenverarbeitung und
          Informationstechnik
        </p>
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
        <p>Mitglied der WKÖ, Fachgruppe UBIT</p>
        <p>Bezirkshauptmannschaft Eisenstadt</p>
      </div>
      <div className="text-dark-text text-sm px-10 lg:px-15 pb-5">
        <p>
          <p>
            <span className="font-bold">Haftungsausschluss:</span> Die Inhalte
            dieser Website wurden mit größter Sorgfalt erstellt. Für die
            Richtigkeit, Vollständigkeit und Aktualität der Inhalte wird jedoch
            keine Haftung übernommen.
          </p>
          <p>
            <span className="font-bold">Urheberrecht: </span> Alle Inhalte
            (Texte, Bilder, Grafiken) unterliegen dem Urheberrecht. Eine
            Vervielfältigung oder Verwendung ohne Zustimmung ist nicht
            gestattet.
          </p>
        </p>
      </div>
      <Footer />
    </div>
  );
}
