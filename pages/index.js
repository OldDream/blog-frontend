import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { CalendarOutlined, FireOutlined, FolderOutlined } from '@ant-design/icons';
import { Row, Col, List } from 'antd';
import Header from '../components/Header';
import Author from '../components/Author';
import Ads from '../components/Ads';
import Footer from '../components/Footer';
import axios from '../utils/axios';
import MDDecode from '../components/MDDecode'


import style from "./index.module.scss"

const Home = (result) => {
  const [articleList, setArticleList] = useState(result.data);

  return (
    <div>
      <Head>
        <title>技研小栈</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Row type="flex" justify="center">
        <Col className="common-left" xs={24} sm={24} md={18} lg={18} xl={14}>
          <List
            header={<div>&emsp;最新日志</div>}
            itemLayout="vertical"
            dataSource={articleList}
            renderItem={item => (
              <List.Item>
                <div className={style.listTitle}>
                  <Link href={{ pathname: '/detail', query: { id: item.id } }}>
                    <a>{item.title}</a>
                  </Link>
                </div>
                <div className={style.listIcon}>
                  {/* <span><Icon type="calendar" />{dateFormat(new Date(item.created_time), 'yyyy-mm-dd')}</span> */}
                  <span>
                    <CalendarOutlined /> {item.created_time}
                  </span>
                  <span>
                    <FolderOutlined /> {item.typeName}
                  </span>
                  <span>
                    <FireOutlined /> {item.view_count}人
                  </span>
                </div>
                <div className={style.listContent}>
                  <MDDecode article={item.introduction} />
                </div>
              </List.Item>
            )}
          />
        </Col>
        <Col className="common-right" xs={0} sm={0} md={5} lg={5} xl={5}>
          <Author />
          <Ads />
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

const getArticleList = () => {
  return new Promise((resolve, reject) => {
    axios.get('/client/getArticleList').then(res => {
      resolve(res.data);
    });
  });
};

// 新版本已变成 getStaticProps 与 getServerSideProps 
// nextjs getInitialProps 专属生命周期
Home.getInitialProps = async () => {
  return await getArticleList();
};

export default Home;
