import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '@/components/Layout'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ topics }) {
  return (
    <Layout>
      <Head>
        <title>Simple Blog</title>
      </Head>
      <main className={styles.main}>
        <Link href='/'><h1 className={styles.mainTitle}>Blog's News</h1></Link>  
        <div className={styles.container}>
        {
          topics && topics.map((item, index) => {
            return (
              <article 
                className={styles.card}
                key={index}>
                  <img 
                      src={item.urlToImage}
                      alt={`description of ${item.title}`}
                      loading='lazy'
                      className={styles.image}
                    />
                    <h2 className={styles.title}>{item.title}</h2>
                    <p className={styles.description}>{item.description}</p>
              </article>
            )
          }).slice(0 ,21)
        }
        </div>
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://newsapi.org/v2/everything?q=apple&from=2023-03-13&to=2023-03-13&sortBy=popularity&apiKey=8fba60923e4541fa917440c7ccee2f7f')
  const data = await res.json()
  const topics = data.articles
  return {
    props: {
      topics
    }
  }
}