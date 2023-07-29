import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import SEO from '@/components/SEO'
import Layout from '@/components/layout';
import copyClipboard from 'copy-to-clipboard';

export default function Home() {

  let handleBannerClick = (bannerId) => {
    copyClipboard(`<a href="https://opendesign.fyi/license/" target="_blank" title="Licensed with Open Design License.">
<img src="https://opendesign.fyi/banners/banner${bannerId}.svg" alt="Open Design License" title="Licensed with Open Design License." width="132px" height="49px"/>
</a>`);
    alert("HTML code copied to clipboard!");
  }

  return (
    <Layout isHome={true}>
      <SEO
        title="Open Design - License for Design" isHome={true}
        description="Open Design is accessible to anyone who is able to get, use, change, and share it"
      />

      <main className={styles.main}>
        <h1 style={{display: "none"}}>Open Design</h1>
        <h2 className={styles.tagline}>Open license that allows you to get, use, change, and share design</h2>
        <p className={styles.taglineParagraph}>Open Design is accessible to anyone who is able to get, use, change, and share it - as long as it is kept track of, not redistributed in the same way and available to everyone.</p>

        <Link href="/license/"><div className={styles.button}>Read Full License</div></Link>

        <svg fill="#000000" style={{opacity: 0.1, marginTop: 70, marginBottom: 60}} width="100px" height="100px" viewBox="-7 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path d="M1,9A1,1,0,1,1,2,8,1,1,0,0,1,1,9ZM2,1A1,1,0,1,0,1,2,1,1,0,0,0,2,1ZM2,15a1,1,0,1,0-1,1A1,1,0,0,0,2,15Z"/>
        </svg>


        <h2 className={styles.tagline}>License Now</h2>
        <p className={styles.taglineParagraph}>Indicate that your design is licensed with Open Design License 1.0</p>

        <div className={styles.banners}>
          <img onClick={() => handleBannerClick(1)} src="/banners/banner1.svg"/>
          <img onClick={() => handleBannerClick(2)} src="/banners/banner2.svg"/>
          <img onClick={() => handleBannerClick(3)} src="/banners/banner3.svg"/>
          <img onClick={() => handleBannerClick(4)} src="/banners/banner4.svg"/>
        </div>

        <p style={{textAlign: "center", opacity: 0.8, lineHeight: 1.8}}>Choose a banner and click to copy HTML code,
          <br/>or <a href="/banners.zip">click here</a> download all banners in PNG and SVG format.<br/>
          Banner code includes an SVG image stored in our servers, and link to full license description.
        </p>

        <svg fill="#000000" style={{opacity: 0.1, marginTop: 70, marginBottom: 60}} width="100px" height="100px" viewBox="-7 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path d="M1,9A1,1,0,1,1,2,8,1,1,0,0,1,1,9ZM2,1A1,1,0,1,0,1,2,1,1,0,0,0,2,1ZM2,15a1,1,0,1,0-1,1A1,1,0,0,0,2,15Z"/>
        </svg>

        <h2 className={styles.tagline}>Contribute</h2>
        <p className={styles.taglineParagraph}>Open Design is open source and its source code is licensed under MIT License, hosted on GitHub. Feel free to make contributions.</p>
        <p style={{textAlign: "center", opacity: 0.8, fontSize: "1.2em"}}><a href="https://github.com/btk/opendesign" target="_blank"><img src="/github-svgrepo-com.svg" style={{width: 21, height: 21, position: "relative", top: 2}}/> See on GitHub</a></p>

        <div style={{paddingBottom: 100}}/>
      </main>

    </Layout>
  )
}
