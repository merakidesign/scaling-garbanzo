import Head from "next/head";
import styles from "./layout.module.css";

const name = "Meraki Designs";
export const siteTitle = "MerakiDesigns — An Experience Design Studio";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link
          rel="preload"
          href="/fonts/EBGaramond/EBGaramond-Regular.woff"
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
          content="Holistic design and intuitive websites for devoted lifestyle and wellness brands"
        />
        <meta
          property="og:image"
          content="/OpenGraphImage.png"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header className={styles.header}>
        <h1 className={styles.branding}>{name}</h1>
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
            strokeWidth="0.5"
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
