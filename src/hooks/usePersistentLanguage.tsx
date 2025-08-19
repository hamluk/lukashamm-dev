import { useEffect, useState } from "react";
import { type Language } from "../context/LanguageContext";

export default function usePersistentLanguage() {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved as Language) || "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return { language, setLanguageState };
}
