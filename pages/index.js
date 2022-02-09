import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import Search from '../components/Search';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Users List</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Search />
      <Navbar />
      <main className={styles.main}>
        <h1>Hello World!!</h1>
      </main>
    </div>
  );
}
