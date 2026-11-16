import React from "react";
import { Helmet } from "react-helmet-async";

// One place for every page's title, description, canonical URL, share card and structured data.
export const SITE_URL = "https://vrdigitalcorporate.netlify.app"; // change when you get a custom domain
const SITE_NAME = "VR DIGITAL & CORPORATE HUB";
const DEFAULT_IMAGE = `${SITE_URL}/images/og-image.png`;

const Seo = ({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE,
  type = "website",
  noindex = false,
  breadcrumb = [], // e.g. [{ name: "About", path: "/about" }]
  jsonLd = [], // extra schema.org objects
}) => {
  const url = `${SITE_URL}${path}`;

  const breadcrumbLd = breadcrumb.length
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          ...breadcrumb.map((b, i) => ({
            "@type": "ListItem",
            position: i + 2,
            name: b.name,
            item: `${SITE_URL}${b.path}`,
          })),
        ],
      }
    : null;

  const blocks = [...(breadcrumbLd ? [breadcrumbLd] : []), ...jsonLd];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, follow" />}

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {blocks.map((block, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(block)}
        </script>
      ))}
    </Helmet>
  );
};

export default Seo;
