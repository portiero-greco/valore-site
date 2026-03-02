import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  lang: "el" | "en";
  url: string;
  image?: string;
}

export function SEO({
  title,
  description,
  lang,
  url,
  image = "https://valore.gr/og/default.jpg"
}: SEOProps) {
  return (
    <Helmet>
      {/* Language */}
      <html lang={lang} />

      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={lang === "el" ? "el_GR" : "en_US"} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* Hreflang */}
      <link rel="alternate" hrefLang="el" href={url.replace("/en", "")} />
      <link rel="alternate" hrefLang="en" href={`/en${url}`} />
    </Helmet>
  );
}
