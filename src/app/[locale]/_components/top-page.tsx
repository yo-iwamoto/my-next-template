import { useTranslations } from "next-intl";

export function TopPage() {
  const t = useTranslations("top-page");

  return (
    <main className="container">
      <h1 className="font-bold text-5xl italic mt-32 text-center">
        {t("tagline")}
      </h1>
    </main>
  );
}
