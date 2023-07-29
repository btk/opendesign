import Link from 'next/link'
import Image from 'next/image'
import styles from "./style.module.css"

function Footer(){
  return(
    <>
      <div className={styles.footerCarrier}>
        <footer className={styles.footer}>
          <p>&copy; {new Date().getFullYear()} &middot; <a href="https://dreamoriented.org" target="_blank" rel="noreferrer" style={{fontWeight: "normal"}}>Open Design License</a></p>
          <p>
            <Link href="/terms-of-use/" style={{fontWeight: "normal"}}>Terms of Use</Link>
            <Link href="/privacy-policy/" style={{fontWeight: "normal", marginLeft: 20}}>Privacy Policy</Link>
            <Link href="/contact/" style={{fontWeight: "normal", marginLeft: 20}}>Contact</Link>
          </p>
        </footer>
      </div>
    </>
  );
}

export default Footer;
