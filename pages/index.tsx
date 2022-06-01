import type { NextPage } from 'next'
import Layout from '../components/Layout'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Layout title="Overpay">
        Home
      </Layout>
    </div>
  )
}

export default Home
