import React from 'react'
import Head from 'next/head'
import {Button} from 'antd'
import Header from '../components/Header'

const Home = () => (
  <div>
    <Head>
      <title>HYN's Blog</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <div>
      <h1>测试</h1>
      <Button>按需引入antd</Button>
    </div>
  </div>
)

export default Home
