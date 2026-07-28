"use client";

import { useLanguage } from "@/components/LanguageProvider";
import styles from "./LanguageSwitcher.module.scss";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className={styles.switcher} aria-label="Select language">
      <button
        type="button"
        className={locale === "it" ? styles.active : styles.button}
        onClick={() => setLocale("it")}
        aria-pressed={locale === "it"}
      >
        IT
      </button>
      <button
        type="button"
        className={locale === "en" ? styles.active : styles.button}
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
      >
        EN
      </button>
    </div>
  );
}