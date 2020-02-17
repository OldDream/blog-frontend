import React, { useState } from 'react';
import Head from 'next/head';
import { Row, Col, Icon, Breadcrumb } from 'antd';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Author from '../components/Author';
import Ads from '../components/Ads';
import './detail.scss';

const Detail = () => (
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
            <Breadcrumb.Item>
              <a href="/articleList">文章列表</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>文章标题</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div>
          <div className="article-title">文章标题文章标题文章标题文章标题</div>
          <div className="icon-list center">
            <span>
              <Icon type="calendar" /> 2019-06-28
            </span>
            <span>
              <Icon type="folder" /> 视频教程
            </span>
            <span>
              <Icon type="fire" /> 5498人阅读
            </span>
          </div>
          <div className="content-div">
            内容内容内容内容内容内容内容内容内容内容
          </div>
        </div>
      </Col>
      <Col className="common-right" xs={0} sm={0} md={7} lg={5} xl={4}>
        <Author />
        <Ads />
      </Col>
    </Row>
    <Footer />
  </div>
);

export default Detail;
