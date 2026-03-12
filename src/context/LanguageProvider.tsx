import { useState, useEffect, useCallback, type ReactNode } from "react";
import {
  type Language,
  LanguageContext,
  type LanguageContextType,
} from "./LanguageContext";

import homepageDe from "../data/homepage-texts.de.json";
import uiLabelsDe from "../data/ui-labels.de.json";
import usePersistentLanguage from "../hooks/usePersistentLanguage";

export type HomepageTexts = typeof homepageDe;
export type UILabelsTexts = typeof uiLabelsDe;

export interface TextNamespaces {
  homepageTexts: HomepageTexts;
  uiLabelsTexts: UILabelsTexts;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const { language, setLanguageState } = usePersistentLanguage();
  const [texts, setTexts] = useState<TextNamespaces>({
    homepageTexts: homepageDe,
    uiLabelsTexts: uiLabelsDe,
  });

  const setLanguage = useCallback((language: Language) => {
    setLanguageState(language);
  }, []);

  useEffect(() => {
    let isActive = true;

    async function loadLanguageTexts(currentLanguage: Language) {
      try {
        const [homepageModule, uiModule] = await Promise.all([
          import(`../data/homepage-texts.de.json`), // ${currentLanguage}
          import(`../data/ui-labels.de.json`),
        ]);

        if (isActive) {
          setTexts({
            homepageTexts: homepageModule.default,
            uiLabelsTexts: uiModule.default,
          });
        }
      } catch (error) {
        console.error(
          `Error loading language files for "${currentLanguage}": `,
          error,
        );
      }
    }

    loadLanguageTexts(language);

    return () => {
      isActive = false;
    };
  }, [language]);

  const contextValues: LanguageContextType = {
    language,
    setLanguage,
    texts,
  };

  return (
    <LanguageContext.Provider value={contextValues}>
      {children}
    </LanguageContext.Provider>
  );
}
