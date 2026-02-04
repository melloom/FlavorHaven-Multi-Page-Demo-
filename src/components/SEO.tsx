import { useEffect } from 'react'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: string
}

const SEO = ({ 
  title = 'Flavor Haven - Premium Dining Experience',
  description = 'Experience culinary excellence at Flavor Haven. Fine dining restaurant featuring farm-to-table cuisine, exceptional service, and unforgettable memories since 2009.',
  keywords = 'restaurant, fine dining, farm to table, culinary, reservations, san francisco, michelin star, gourmet dining',
  image = '/og-image.jpg',
  url = 'https://flavorhaven.com',
  type = 'website'
}: SEOProps) => {
  const siteTitle = title.includes('Flavor Haven') ? title : `${title} | Flavor Haven`
  const siteDescription = description
  const siteUrl = url

  useEffect(() => {
    // Update document title
    document.title = siteTitle

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement
      if (!meta) {
        meta = document.createElement('meta')
        meta.name = name
        document.head.appendChild(meta)
      }
      meta.content = content
    }

    const updateProperty = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute('property', property)
        document.head.appendChild(meta)
      }
      meta.content = content
    }

    // Basic Meta Tags
    updateMetaTag('description', siteDescription)
    updateMetaTag('keywords', keywords)
    updateMetaTag('author', 'Flavor Haven')
    updateMetaTag('robots', 'index, follow')
    updateMetaTag('language', 'en')
    updateMetaTag('revisit-after', '7 days')

    // Open Graph / Facebook
    updateProperty('og:type', type)
    updateProperty('og:title', siteTitle)
    updateProperty('og:description', siteDescription)
    updateProperty('og:image', image)
    updateProperty('og:image:alt', siteTitle)
    updateProperty('og:url', siteUrl)
    updateProperty('og:site_name', 'Flavor Haven')
    updateProperty('og:locale', 'en_US')

    // Twitter Card
    updateMetaTag('twitter:card', 'summary_large_image')
    updateMetaTag('twitter:title', siteTitle)
    updateMetaTag('twitter:description', siteDescription)
    updateMetaTag('twitter:image', image)
    updateMetaTag('twitter:site', '@flavorhaven')
    updateMetaTag('twitter:creator', '@flavorhaven')

    // Additional Meta Tags
    updateMetaTag('theme-color', '#ea580c')
    updateMetaTag('msapplication-TileColor', '#ea580c')
    updateMetaTag('application-name', 'Flavor Haven')
    updateMetaTag('apple-mobile-web-app-title', 'Flavor Haven')
    updateMetaTag('format-detection', 'telephone=no')
    updateMetaTag('mobile-web-app-capable', 'yes')
    updateMetaTag('apple-mobile-web-app-capable', 'yes')
    updateMetaTag('apple-mobile-web-app-status-bar-style', 'black-translucent')

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = siteUrl

    // Structured Data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": type === 'restaurant' ? 'Restaurant' : 'WebSite',
      "name": "Flavor Haven",
      "description": siteDescription,
      "url": siteUrl,
      "image": image,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Belden Place",
        "addressLocality": "San Francisco",
        "addressRegion": "CA",
        "postalCode": "94105",
        "addressCountry": "US"
      },
      "telephone": "+1 (415) 555-0147",
      "email": "hello@flavorhaven.com",
      "priceRange": "$$$",
      "servesCuisine": ["American", "Contemporary", "Farm-to-table"],
      "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
      "openingHours": [
        "Tuesday-Thursday 17:30-22:00",
        "Friday-Saturday 17:30-23:00",
        "Sunday 17:00-21:00"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "324"
      }
    }

    let script = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement
    if (!script) {
      script = document.createElement('script')
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(structuredData)

    // Cleanup function
    return () => {
      // Optional: Clean up meta tags if needed
    }
  }, [siteTitle, siteDescription, siteUrl, image, type, keywords])

  return null // This component doesn't render anything
}

export default SEO
