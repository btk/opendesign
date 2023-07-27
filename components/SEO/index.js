import Link from 'next/link'
import { NextSeo } from 'next-seo';

function SEO({ description, meta, title, noMainTitle, isHome, canonical, imageURL }) {

  const metaDescription = description;

  title = (noMainTitle || isHome) ? title : `${title} - SVG Repo`;

  if(!imageURL){
    imageURL = "https://vrux.co/social.png";
  }

  return (
    <NextSeo
      title={title}
      description={metaDescription}
      canonical={"https://vrux.co"+canonical}
      openGraph={{
        url: "https://vrux.co"+canonical,
        title: title,
        description: metaDescription,
        site_name: 'VRUX',
        images: [
          { url: imageURL,
            width: 256,
            height: 256,
            alt: 'VR Prototyping',
            type: 'image/png'
          }
        ]
      }}
      robotsProps={{
        maxImagePreview: 'large'
      }}
      twitter={{
        handle: '@vrux',
        site: '@vrux',
        cardType: 'summary',
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

export default SEO
