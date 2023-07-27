import styles from '@/styles/Layout.module.css'
import dynamic from "next/dynamic";

const Header = dynamic(import("./Header"));
const Hero = dynamic(import("./Hero"));
const Footer = dynamic(import("./Footer"));

export default function Layout({children, isHome, searchType}) {
  let renderHeader = () => {
    if(isHome){
      return <Hero isHome={isHome} searchType={searchType}/>
    }else{
      return <Header isHome={isHome} searchType={searchType}/>
    }
  }

  return (
    <div>
      {renderHeader()}
      <div className={styles.fixed}>
        {children}
      </div>
      <Footer/>
    </div>
  )
}
