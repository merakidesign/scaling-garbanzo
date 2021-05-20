import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Meraki Designs";
export const siteTitle = "MerakiDesigns Website";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/fonts/EBGaramond/EBGaramond-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Venus/VenusSB-MediumExtended.woff"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Venus/VenusSB-MediumExtended.woff2"
          as="font"
          crossOrigin=""
        />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header className={styles.header}>
        {home ? (
          <>
            <h1 className={styles.branding}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>

      <main>{children}</main>

      <div className={styles.scroll}>
        <svg
          width="21"
          height="17"
          viewBox="0 0 21 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="10.75"
            x2="10.75"
            y2="16"
            stroke="black"
            stroke-width="0.5"
          />
          <path
            d="M8.48 11.78C8.46 11.74 8.45 11.7033 8.45 11.67C8.45 11.5833 8.51 11.54 8.63 11.54C8.69667 11.54 8.77333 11.5667 8.86 11.62C8.94667 11.68 9.01 11.7567 9.05 11.85L10.79 15.58C10.7967 15.5933 10.8033 15.5967 10.81 15.59C10.8233 15.59 10.8333 15.5833 10.84 15.57L12.58 11.77C12.62 11.69 12.69 11.63 12.79 11.59C12.8967 11.55 12.9867 11.53 13.06 11.53C13.0867 11.53 13.1133 11.54 13.14 11.56C13.1733 11.5867 13.19 11.6133 13.19 11.64L13.18 11.67L11.18 15.96C11.0533 16.2333 10.9633 16.37 10.91 16.37C10.85 16.37 10.7667 16.3367 10.66 16.27C10.56 16.2033 10.49 16.1267 10.45 16.04L8.48 11.78Z"
            fill="black"
          />
        </svg>
        <p className={styles.scrollmessage}>Launching soon</p>
      </div>
    </div>
  );
}
