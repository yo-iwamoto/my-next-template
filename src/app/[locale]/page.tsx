import { initializeLocale } from "@/i18n/initialize-locale";

type Props = {
  params: {
    locale: string;
  };
};

export default function Page({ params: { locale } }: Props) {
  initializeLocale(locale);

  return <h1>Page</h1>;
}
