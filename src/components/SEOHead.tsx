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
  '/': 'https://cropxon.com/og/cropxon-og.png',
  '/cognix': 'https://cropxon.com/og/cognix-og.png',
  '/cropxon-cloud': 'https://cropxon.com/og/cropxon-cloud-og.png',
  '/traceflow': 'https://cropxon.com/og/traceflow-og.png',
  '/qualyx': 'https://cropxon.com/og/qualyx-og.png',
  '/huminex': 'https://cropxon.com/og/huminex-og.png',
  '/opzenix': 'https://cropxon.com/og/opzenix-og.png',
  '/atlas': 'https://cropxon.com/og/atlas-og.png',
  '/zenith-studio': 'https://cropxon.com/og/zenith-studio-og.png',
  '/stackcraft': 'https://cropxon.com/og/stackcraft-og.png',
  '/originx-labs': 'https://cropxon.com/og/originx-labs-og.png',
  '/robotics': 'https://cropxon.com/og/robotics-og.png',
  '/blog': 'https://cropxon.com/og/blog-og.png',
  '/proxinex': 'https://cropxon.com/og/proxinex-og.png',
  '/chronyx': 'https://cropxon.com/og/chronyx-og.png',
  '/convertix': 'https://cropxon.com/og/convertix-og.png',
  '/finioraa': 'https://cropxon.com/og/finioraa-og.png',
};

const SEOHead = ({
  title,
  description,
  keywords = '',
  image,
  url = 'https://cropxon.com',
  type = 'website'
}: SEOHeadProps) => {
  const fullTitle = title.includes('Cropxon') ? title : `${title} | Cropxon`;
  
  // Get OG image from map based on URL path, or use provided image, or default
  const urlPath = url.replace('https://cropxon.com', '');
  const ogImage = image || ogImageMap[urlPath] || 'https://cropxon.com/og/cropxon-og.png';
  
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
      <meta property="og:site_name" content="Cropxon Innovations" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@CropxonAI" />
      <meta name="twitter:creator" content="@CropxonAI" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEOHead;