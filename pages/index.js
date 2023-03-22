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

// 新版本已变成 getStaticProps 与 getServerSideProps，https://juejin.cn/post/7211422882251931707
// getStaticProps 每次对页面对应URL请求，
/**
 * 一般在编写首页、或静态展示页面等情况下使用，
 * 只会在构建时运行一次，具有以下几种特点:

仅可在服务端获取数据。
在构建时运行，将数据预渲染到 HTML 文件中。
对于每个页面，在构建时只会运行一次，不会随着页面请求而重新运行，因此对于数据频繁变化的情况不适用。
对于数据变化不频繁的静态页面，可以提高页面渲染性能和用户体验。


 */
// getServerSideProps 
/**
 * 
 * @returns 在编写数据需要频繁更新的页面时使用, 以便于随时获取最新数据，特点如下：

在服务端获取数据。
每次页面请求都会重新运行 getServerSideProps 方法，因此可以实时获取最新数据。
适用于需要实时获取数据的情况。
不能用于在构建时预渲染页面，因此对于数据变化不频繁的静态页面不适用。

 */
// nextjs getInitialProps 专属生命周期
Home.getInitialProps = async () => {
  return await getArticleList();
};

export default Home;
