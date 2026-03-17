import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function MeetingsEmbed() {
  const { texts } = useLanguage();
  const iframeRef = useRef(null);
  const [blocked, setBlocked] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!loaded) {
        setBlocked(true);
      }
    }, 3000);

    return () => clearTimeout(timeout);
  }, [loaded]);

  return (
    <div className="w-full h-full rounded-2xl">
      {!blocked ? (
        <>
          <h2 className="text-2xl font-semibold text-dark-text text-center">
            {texts.homepageTexts.Contact.meeting_planer}
          </h2>
          <iframe
            ref={iframeRef}
            src="https://meetings-eu1.hubspot.com/lukas-hamm?embed=true"
            className="w-full h-full rounded-2xl border-none"
            onLoad={() => setLoaded(true)}
          />
        </>
      ) : (
        <FallbackMessage />
      )}
    </div>
  );
}

function FallbackMessage() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6 text-center rounded-2xl text-dark-text">
      <h3 className="text-lg font-semibold mb-2 ">
        Meeting Planer konnte nicht geladen werden
      </h3>
      <p className="mb-4 text-sm">
        Ihr Browser blockiert externe Inhalte (z. B. Tracking-Schutz).
      </p>
      <a
        href="https://meetings-eu1.hubspot.com/lukas-hamm?embed=true"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-dark-blue-2 text-white rounded-lg"
      >
        Meeting Planer stattdessen in eigenem Tab öffnen
      </a>
    </div>
  );
}
