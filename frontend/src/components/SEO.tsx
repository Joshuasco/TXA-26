import { Helmet } from 'react-helmet-async';

type SEOProps = {
  title: string;
  description: string;
  url?: string;
  image?: string;
  type?: string;
  keywords?: string;
  structuredData?: object;
};

export default function SEO({
  title,
  description,
  url,
  image,
  type = 'website',
  keywords,
  structuredData
}: SEOProps) {
  const siteUrl = 'https://techxafrica.com'; // Update with your actual domain
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const ogImage = image ? `${siteUrl}${image}` : `${siteUrl}/og-image.png`;
  const fullTitle = title.includes('TECHX Africa') ? title : `${title} | TECHX Africa 2026`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="TECHX Africa 2026" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}
