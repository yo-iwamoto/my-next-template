import { initializeLocale } from "@/i18n/initialize-locale";
import { TopPage } from "./_components/top-page";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  initializeLocale(locale);

  return <TopPage />;
}
