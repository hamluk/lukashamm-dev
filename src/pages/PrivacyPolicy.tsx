import Footer from "../components/ui/Footer";
import Header from "../components/ui/Header";
import ReactMarkdown from "react-markdown";
import privacy from "../data/data-privacy.de.md?raw";

type Props = {};

export default function Impressum({}: Props) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="markdown flex-1 text-dark-text p-10 lg:px-20">
        <ReactMarkdown>{privacy}</ReactMarkdown>
      </div>
      <Footer />
    </div>
  );
}
