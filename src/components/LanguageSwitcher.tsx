"use client";

import { useLanguage } from "@/components/LanguageProvider";
import styles from "./LanguageSwitcher.module.scss";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <label className={styles.wrapper} aria-label="Select language">
      <select
        className={styles.select}
        value={locale}
        onChange={(e) => setLocale(e.target.value as "it" | "en")}
      >
        <option value="it">IT</option>
        <option value="en">EN</option>
      </select>
    </label>
  );
}