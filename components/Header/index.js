import Link from 'next/link'
import Image from 'next/image'
import styles from "./style.module.css"

function Header(){

  return(
    <>
      <div className={styles.header}>
        <div className={styles.headerHolder}>
          <img className={styles.logo} src={"/logo.svg"} width={73} height={22} alt={`SVG Repo - Search, explore, edit and share open licensed SVG vectors`} />
        </div>
      </div>
      <div className={styles.headerSpacer}></div>
    </>
  );
}

export default Header;
