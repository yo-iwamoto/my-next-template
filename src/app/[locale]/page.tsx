import { initializeLocale } from "@/i18n/initialize-locale";

type Props = {
  params: {
    locale: string;
  };
};

export default function Page({ params: { locale } }: Props) {
  initializeLocale(locale);

  return (
    <main className="container">
      <h1 className="font-bold text-xl">Page</h1>
    </main>
  );
}
