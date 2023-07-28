import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import SEO from '@/components/SEO'
import Layout from '@/components/layout';

export default function Home() {
  return (
    <Layout isHome={true}>
      <SEO
        title="Open Design - License for Design" isHome={true}
        description="VRUX is an open-source software that makes prototyping VR experiences crazy fast and intuitive, express interest below."
      />

      <main className={styles.main}>
        <h1 style={{display: "none"}}>Open Design</h1>
        <h2 className={styles.tagline}>Get, use, change, and share it</h2>
        <p className={styles.taglineParagraph}>Open Design is accessible to anyone who is able to get, use, change, and share it - as long as it is kept track of, not redistributed in the same way and available to everyone.</p>

        <Link href="/license/"><div className={styles.button}>Read Full License</div></Link>
      </main>

    </Layout>
  )
}
