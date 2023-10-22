import React from "react";
import Head from "next/head";

interface SEOProps {
  description?: string;
  lang?: string;
  meta?: { name: string; content: string }[];
  title: string;
}

const SEO = ({ description, lang, meta = [], title }: SEOProps) => {
  const metaDescription = description || "";

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      {/* You can add other meta tags here */}
      <title>{title}</title>
    </Head>
  );
};

export default SEO;
