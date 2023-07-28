import Link from 'next/link'
import Image from 'next/image'
import styles from "./style.module.css"

function Header(){

  return(
    <>
      <div className={styles.hero}>
        <div className={styles.heroHolder}>
          <img className={styles.logo} src={"/logo.svg"} width={250} height={100} alt={`Open Design Logo`} />
        </div>
      </div>
      <div className={styles.headerSpacer}></div>
    </>
  );
}

export default Header;
