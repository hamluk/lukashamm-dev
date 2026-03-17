import { useEffect, useRef, useState } from "react";

function ContactEmbed() {
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
        <iframe
          ref={iframeRef}
          src="https://2g2jec.share-eu1.hsforms.com/2YRtpYPVdTweRBnZkFMziNg"
          className="w-full h-full rounded-2xl border-none"
          onLoad={() => setLoaded(true)}
        />
      ) : (
        <FallbackMessage />
      )}
    </div>
  );
}

function FallbackMessage() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6 text-center rounded-2xl text-dark-text">
      <h3 className="text-lg font-semibold mb-2">
        Formular konnte nicht geladen werden
      </h3>
      <p className="mb-4 text-sm">
        Ihr Browser blockiert externe Inhalte (z. B. Tracking-Schutz).
      </p>
      <a
        href="https://2g2jec.share-eu1.hsforms.com/2YRtpYPVdTweRBnZkFMziNg"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-dark-blue-2 text-white rounded-lg"
      >
        Formular stattdessen in eigenem Tab öffnen
      </a>
    </div>
  );
}

export default ContactEmbed;
