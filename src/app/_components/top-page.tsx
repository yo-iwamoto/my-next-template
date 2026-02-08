import { useExtracted } from "next-intl";

export function TopPage() {
  const t = useExtracted("top-page");

  return (
    <main className="container">
      <h1 className="font-bold text-5xl italic mt-32 text-center">
        {t("こんにちは、世界")}
      </h1>
    </main>
  );
}
