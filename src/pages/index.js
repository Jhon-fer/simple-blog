import Head from 'next/head'
import Image from 'next/image'
import Layout from '@/components/Layout'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ topics }) {
  return (
    <Layout>
      <Head>
        <title>Simple Blog</title>
      </Head>
      <main>
        <Link href='/'>Blog's News</Link>  
        {
          topics && topics.map((item, index) => {
            return (
              <article key={index}>
                <img 
                  src={item.urlToImage}
                  alt={`description of ${item.title}`}
                  loading='lazy'
                />
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </article>
            )
          }).slice(0 ,11)
        }
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