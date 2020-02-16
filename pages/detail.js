import React, {useState} from 'react'
import Head from 'next/head'
import { Row, Col} from 'antd';
import Header from '../components/Header'

const Detail = () => (
  <div>
    <Head>
      <title>HYN's Blog - 文章列表</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <Row className="common-main" type="flex" justify="center">
      <Col className="common-right" xs={24} sm={24} md={16} lg={18} xl={14}>
        Left
      </Col>
      <Col className="common-right" xs={0} sm={0} md={7} lg={5} xl={4}>
        右侧
      </Col>
    </Row>
  </div>
)

export default Detail
