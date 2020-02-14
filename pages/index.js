import React from 'react'
import Head from 'next/head'
import {Button} from 'antd'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div>
      <h1>测试</h1>
      <Button>按需引入antd</Button>
    </div>
  </div>
)

export default Home
