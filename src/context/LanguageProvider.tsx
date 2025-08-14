import { useState, useEffect, useCallback, type ReactNode } from "react";
import {
  type Language,
  LanguageContext,
  type LanguageContextType,
} from "./LanguageContext";

import homepageEn from "../data/homepage-texts.en.json";
import uiLabelsEn from "../data/ui-labels.en.json";

type HomepageTexts = typeof homepageEn;
type UILabelsTexts = typeof uiLabelsEn;

export interface TextNamespaces {
  homepageTexts: HomepageTexts;
  uiLabelsTexts: UILabelsTexts;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [texts, setTexts] = useState<TextNamespaces | null>(null);

  const setLanguage = useCallback((language: Language) => {
    setLanguageState(language);
  }, []);

  useEffect(() => {
    let isActive = true;

    async function loadLanguageTexts(currentLanguage: Language) {
      try {
        const [homepageModule, uiModule] = await Promise.all([
          import(`../data/homepage-texts.${currentLanguage}.json`),
          import(`../data/ui-labels.${currentLanguage}.json`),
        ]);

        if (isActive) {
          setTexts({
            homepageTexts: homepageModule.default,
            uiLabelsTexts: uiModule.default,
          });
          console.log(
            `Language texts loaded for "${currentLanguage}": `,
            texts?.uiLabelsTexts.buttons.change_language,
            uiModule.default
          );
        }
      } catch (error) {
        console.error(
          `Error loading language files for "${currentLanguage}": `,
          error
        );
      }
    }

    loadLanguageTexts(language);

    return () => {
      isActive = false;
    };
  }, [language]);

  const value: LanguageContextType = {
    language,
    setLanguage,
    texts,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
