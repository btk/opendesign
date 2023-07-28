import Link from 'next/link'
import Image from 'next/image'
import styles from "./style.module.css"

function Header(){

  return(
    <>
      <div className={styles.header}>
        <div className={styles.headerHolder}>
          <img className={styles.logo} src={"/logo.svg"} width={140} height={30} alt={`SVG Repo - Search, explore, edit and share open licensed SVG vectors`} />

          <ul className={styles.menuMobile} style={{display: "auto"}}>
            <li>
              <div onClick={() => setMobileSearchState("open")}>
                <svg style={{position: "relative", top: 5, marginLeft: 5, marginRight: 5}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="21" height="21" fill="#333">
                  <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/>
                </svg>
              </div>
            </li>
          </ul>
          <ul className={styles.menu}>
            <li><Link href="/">Tools</Link></li>
            <li><Link href="/license/">License</Link></li>
            <li><Link href="/contact/">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className={styles.headerSpacer}></div>
    </>
  );
}

export default Header;
