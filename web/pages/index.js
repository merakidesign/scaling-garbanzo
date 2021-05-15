import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/home.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={styles.hero}>
        <p className={styles.subtitle}>An experience design studio</p>
        <p className={styles.title}>
          Holistic design & intuitive websites for devoted lifestyle and wellness brands
        </p>
      </section>
    </Layout>
  )
}