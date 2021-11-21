import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import XHR from "i18next-xhr-backend";
import Backend from "i18next-http-backend";

import En from "./English/English.json";
import Fa from "./Farsi/Farsi.json";

export const resources = {
  en: En,
  fa: Fa,
} as const;

i18n
  .use(Backend)
  .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: localStorage.getItem("i18nextLng") || "fa",
    fallbackLng: "fa",
    debug: false,
    ns: ["translations"],
    defaultNS: "translations",
    fallbackNS: "translations",
    ignoreJSONStructure: false,
    keySeparator: ".",
    interpolation: {
      escapeValue: false, // not needed for react!!
      formatSeparator: ",",
    },
    react: {
      bindI18n: "languageChanged",
      bindI18nStore: "",
      transEmptyNodeValue: "",
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ["br", "strong", "i"],
      useSuspense: true,
    },
    // react: {
    //   wait: true,
    //   bindI18n: "languageChanged loaded",
    //   bindStore: "added removed",
    //   nsMode: "default",
    //   useSuspense: true,
    // },
    resources,
  });

export default i18n;
