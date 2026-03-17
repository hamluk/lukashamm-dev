import Footer from "../components/ui/Footer";
import Header from "../components/ui/Header";
import PrivacyRequestEmbed from "../components/ui/PrivacyRequestEmbed";

type Props = {};

export default function PrivacyRequest({}: Props) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 text-dark-text pb-5 pt-30 lg:px-20">
        <PrivacyRequestEmbed />
      </div>
      <Footer />
    </div>
  );
}
