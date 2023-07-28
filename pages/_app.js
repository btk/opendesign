import '../styles/globals.css'
import { GoogleAnalytics } from "nextjs-google-analytics";

import { Inter } from '@next/font/google'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
    subsets: ['latin'],
    weight: ['300', '400', '600', '800'],
})

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html, input {
          font-family: ${inter.style.fontFamily}, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }
      `}</style>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
