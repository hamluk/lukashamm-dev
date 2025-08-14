import { createContext, useContext } from "react";

export type Language = "en" | "de";

export interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  texts: any | null;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
