import { useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  keywords?: string[];
  ogImage?: string;
  schema?: Record<string, unknown> | Record<string, unknown>[];
}

export function SEO({
  title,
  description,
  canonicalPath = '',
  keywords,
  ogImage,
  schema,
}: SEOProps) {
  const fullTitle = title
    ? `${title} | ${siteConfig.business.name} Arlington VA`
    : siteConfig.seo.defaultTitle;
  const metaDescription = description || siteConfig.seo.defaultDescription;
  const currentUrl = `${siteConfig.seo.siteUrl}${canonicalPath}`;
  const socialImage = ogImage || `${siteConfig.seo.siteUrl}${siteConfig.seo.ogImage}`;
  const metaKeywords = keywords?.length
    ? keywords.join(', ')
    : siteConfig.seo.keywords.join(', ');

  useEffect(() => {
    // 1. Update Title
    document.title = fullTitle;

    // 2. Helper to set or create meta tag
    const setMetaTag = (attribute: string, key: string, content: string) => {
      let element = document.querySelector(`meta[${attribute}="${key}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMetaTag('name', 'description', metaDescription);
    setMetaTag('name', 'keywords', metaKeywords);
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', metaDescription);
    setMetaTag('property', 'og:url', currentUrl);
    setMetaTag('property', 'og:image', socialImage);
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:description', metaDescription);
    setMetaTag('name', 'twitter:image', socialImage);

    // 3. Update Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', currentUrl);

    // 4. Update Schema.org JSON-LD
    let scriptTag = document.getElementById('seo-structured-data') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'seo-structured-data';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    // Default LocalBusiness Schema + any page-specific schema
    const defaultLocalBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': ['HomeAndConstructionBusiness', 'GeneralContractor'],
      '@id': `${siteConfig.seo.siteUrl}/#business`,
      name: siteConfig.business.name,
      alternateName: siteConfig.business.shortName,
      logo: `${siteConfig.seo.siteUrl}${siteConfig.business.logoImage}`,
      image: `${siteConfig.seo.siteUrl}${siteConfig.business.logoImage}`,
      description: siteConfig.seo.defaultDescription,
      url: siteConfig.seo.siteUrl,
      telephone: siteConfig.contact.phone,
      email: siteConfig.contact.email,
      priceRange: '$$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.contact.address,
        addressLocality: siteConfig.contact.city,
        addressRegion: siteConfig.contact.stateAbbr,
        postalCode: siteConfig.contact.zip,
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 38.8899,
        longitude: -77.0935,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '07:30',
          closes: '18:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '08:00',
          closes: '15:00',
        },
      ],
      areaServed: siteConfig.serviceAreas.areas.map((a) => ({
        '@type': 'AdministrativeArea',
        name: a.name,
      })),
      review: siteConfig.reviews.slice(0, 5).map((rev) => ({
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: rev.author,
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: rev.rating,
          bestRating: 5,
        },
        reviewBody: rev.content,
      })),
      sameAs: Object.values(siteConfig.socialLinks).filter(Boolean),
    };

    const finalSchemas = schema
      ? Array.isArray(schema)
        ? [defaultLocalBusinessSchema, ...schema]
        : [defaultLocalBusinessSchema, schema]
      : [defaultLocalBusinessSchema];

    scriptTag.textContent = JSON.stringify(finalSchemas, null, 2);
  }, [fullTitle, metaDescription, currentUrl, socialImage, metaKeywords, schema]);

  return null;
}
