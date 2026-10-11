
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import translations from "../data/translations";

const SettingsContext = createContext(null);

export function SettingsProvider({ children }) {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("portfolio-theme") || "dark"
  );

  const [language, setLanguage] = useState(
    () => localStorage.getItem("portfolio-language") || "en"
  );

  const t = translations[language] || translations.en;

  useEffect(() => {
    localStorage.setItem("portfolio-theme", theme);

    document.documentElement.dataset.theme = theme;
    document.documentElement.classList.toggle(
      "light-mode",
      theme === "light"
    );
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("portfolio-language", language);

    document.documentElement.lang = language;
    document.documentElement.dir =
      language === "ar" ? "rtl" : "ltr";
  }, [language]);

  const toggleTheme = () => {
    setTheme((current) =>
      current === "dark" ? "light" : "dark"
    );
  };

  const toggleLanguage = () => {
    setLanguage((current) =>
      current === "en" ? "ar" : "en"
    );
  };

  return (
    <SettingsContext.Provider
      value={{
        theme,
        language,
        toggleTheme,
        toggleLanguage,
        t,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);

  if (!context) {
    throw new Error(
      "useSettings must be used inside SettingsProvider"
    );
  }

  return context;
}