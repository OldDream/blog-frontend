import React, { useState } from 'react';
import Head from 'next/head';
import { Row, Col, Icon, Breadcrumb } from 'antd';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Author from '../components/Author';
import Ads from '../components/Ads';
import ReactMarkdown from 'react-markdown';
import MDNav from 'markdown-navbar';
import axios from '../utils/axios';

import 'markdown-navbar/dist/navbar.css';
import './detail.scss';

const Detail = (detail) => {
  const [article, setArticle] = useState(detail.data);

  return (
    <div>
      <Head>
        <title>HYN's Blog - {article.title}</title>
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
              <Breadcrumb.Item>
                <a href="/articleList">文章列表</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>{article.title}</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div>
            <div className="article-title">
              {article.title}
            </div>
            <div className="icon-list center">
              <span>
                <Icon type="calendar" /> {article.created_time}
              </span>
              <span>
                <Icon type="folder" />  {article.typeName}
              </span>
              <span>
                <Icon type="fire" /> {article.view_count}人阅读
              </span>
            </div>
            <div className="content-div">
              <ReactMarkdown source={article.content} escapeHtml={false} />
            </div>
          </div>
        </Col>
        <Col className="common-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Ads />
          <div className="mdnav-div common-box">
            <div className="title">文章目录</div>
            <MDNav
              className="md-category"
              source={article.content}
              ordered={false}
            />
          </div>
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

const getDetail = (ctx) => {
  return new Promise((resolve, reject) => {
    axios.get('/client/getArticleById?id=' + ctx.query.id).then(res => {
      console.log(res.data.data)
      resolve(res.data);
    });
  });
};

// nexjs getInitialProps 专属生命周期
Detail.getInitialProps = async (ctx) => {
  return await getDetail(ctx);
};

export default Detail;
