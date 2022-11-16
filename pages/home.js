import styles from '../styles/Home.module.css'

import Header from '../components/header'
import Footer from '../components/footer'

import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>

      <main className={styles.main}>
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about">About Us</Link>
            </li>
            <li>
                <Link href="/blog/">Blog Post</Link>
            </li>
        </ul>
      </main>
      <Footer/>
    </div>
  )
}
