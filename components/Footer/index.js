import Link from 'next/link'
import Image from 'next/image'
import styles from "./style.module.css"

function Footer(){
  return(
    <>
      <div className={styles.footerCarrier}>
        <footer className={styles.footer}>
            <p style={{opacity: 0.5}}>&copy; {new Date().getFullYear()} &middot; <a href="https://dreamoriented.org" target="_blank" rel="noreferrer" style={{fontWeight: "normal"}}>Dream Oriented Limited</a></p>
        </footer>
      </div>
    </>
  );
}

export default Footer;
