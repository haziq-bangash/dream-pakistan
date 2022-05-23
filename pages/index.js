import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Carousel } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'


import Dashboard from './Dashboard';

export default function Home() {
  return (
    <>
    <Head>
      <title>DreamPakistan</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <link rel="icon" type="image" href="/favicon.ico" />
    </Head>
    <Dashboard />
    </>
  )
}
