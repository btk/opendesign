import { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from "./style.module.css"

function Header(){

  let [menuState, setMenuState] = useState(false);

  return(
    <>
      <div className={styles.header}>
        <div className={styles.headerHolder}>
          <Link href="/"><img className={styles.logo} src={"/logo.svg"} width={140} height={30} alt={`SVG Repo - Search, explore, edit and share open licensed SVG vectors`} /></Link>

          <ul className={styles.menuMobile} style={{display: "auto"}}>
            <li>
              <div onClick={() => setMenuState(!menuState)}>
                <svg style={{position: "relative", top: 5, marginLeft: 5, marginRight: 5}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#333">
                  <path d="M4 6H20M4 12H20M4 18H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </div>
            </li>
          </ul>
          <ul className={styles.menu} style={menuState ? {display: "block"} : {}}>
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
