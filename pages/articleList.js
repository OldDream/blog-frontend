import React, { useState,useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Row, Col, List, Icon, Breadcrumb } from 'antd';
import axios from '../utils/axios';
import Header from '../components/Header';
import Author from '../components/Author';
import Ads from '../components/Ads';
import Footer from '../components/Footer';
import './articleList.scss';

const articleListPage = result => {
  const [articleList, setArticleList] = useState(result.data);
  useEffect(() => {
    setArticleList(result.data)
  })

  return (
    <div>
      <Head>
        <title>HYN's Blog - 文章列表</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Row className="common-main" type="flex" justify="center">
        <Col className="common-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div className="breadcrumb-div">
            <Breadcrumb>
              <Breadcrumb.Item>
                <a href="/">首页</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>文章列表</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <List
            itemLayout="vertical"
            dataSource={articleList}
            renderItem={item => (
              <List.Item>
                <div className="articleList-title">
                  <Link href={{ pathname: '/detail', query: { id: item.id } }}>
                    <a>{item.title}</a>
                  </Link>
                </div>
                <div className="articleList-icon">
                  {/* <span><Icon type="calendar" />{dateFormat(new Date(item.created_time), 'yyyy-mm-dd')}</span> */}
                  <span>
                    <Icon type="calendar" /> {item.created_time}
                  </span>
                  <span>
                    <Icon type="folder" /> {item.typeName}
                  </span>
                  <span>
                    <Icon type="fire" /> {item.view_count}人
                  </span>
                </div>
                <div className="articleList-content">{item.introduction}</div>
              </List.Item>
            )}
          />
        </Col>
        <Col className="common-right" xs={0} sm={0} md={8} lg={6} xl={5}>
          <Author />
          <Ads />
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

const getArticleList = ctx => {
  console.log(ctx);
  return new Promise((resolve, reject) => {
    axios
      .get(
        ctx.query.typeId
          ? `/client/getArticleListById?typeId=${ctx.query.typeId}`
          : '/client/getArticleList'
      )
      .then(res => {
        resolve(res.data);
      });
  });
};

// nexjs getInitialProps 专属生命周期
articleListPage.getInitialProps = async ctx => {
  return await getArticleList(ctx);
};

export default articleListPage;
