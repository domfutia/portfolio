"use client";

import { useLanguage } from "@/components/LanguageProvider";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <select
      value={locale}
      onChange={(e) => setLocale(e.target.value as "it" | "en")}
      aria-label="Select language"
    >
      <option value="it">IT</option>
      <option value="en">EN</option>
    </select>
  );
}