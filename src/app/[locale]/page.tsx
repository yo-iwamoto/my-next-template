import { initializeLocale } from "@/i18n/initialize-locale";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  initializeLocale(locale);

  return (
    <main className="container">
      <h1 className="font-bold text-xl">Page</h1>
    </main>
  );
}
