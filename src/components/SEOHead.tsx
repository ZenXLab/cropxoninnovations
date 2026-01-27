import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
}

// Map of page paths to their OG images
const ogImageMap: Record<string, string> = {
  '/': 'https://originxlabs.com/og/originx-og.png',
  '/cognix': 'https://originxlabs.com/og/cognix-og.png',
  '/originx-cloud': 'https://originxlabs.com/og/originx-cloud-og.png',
  '/traceflow': 'https://originxlabs.com/og/traceflow-og.png',
  '/qualyx': 'https://originxlabs.com/og/qualyx-og.png',
  '/huminex': 'https://originxlabs.com/og/huminex-og.png',
  '/opzenix': 'https://originxlabs.com/og/opzenix-og.png',
  '/atlas': 'https://originxlabs.com/og/atlas-og.png',
  '/zenith-studio': 'https://originxlabs.com/og/zenith-studio-og.png',
  '/stackcraft': 'https://originxlabs.com/og/stackcraft-og.png',
  '/originx-labs': 'https://originxlabs.com/og/originx-labs-og.png',
  '/robotics': 'https://originxlabs.com/og/robotics-og.png',
  '/blog': 'https://originxlabs.com/og/blog-og.png',
  '/proxinex': 'https://originxlabs.com/og/proxinex-og.png',
  '/chronyx': 'https://originxlabs.com/og/chronyx-og.png',
  '/convertix': 'https://originxlabs.com/og/convertix-og.png',
  '/finioraa': 'https://originxlabs.com/og/finioraa-og.png',
};

const SEOHead = ({
  title,
  description,
  keywords = '',
  image,
  url = 'https://originxlabs.com',
  type = 'website'
}: SEOHeadProps) => {
  const fullTitle = title.includes('OriginX') ? title : `${title} | OriginX Labs`;
  
  // Get OG image from map based on URL path, or use provided image, or default
  const urlPath = url.replace('https://originxlabs.com', '');
  const ogImage = image || ogImageMap[urlPath] || 'https://originxlabs.com/og/originx-og.png';
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="OriginX Labs" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@OriginXLabs" />
      <meta name="twitter:creator" content="@OriginXLabs" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEOHead;
