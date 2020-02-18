import React, { useState } from 'react';
import Head from 'next/head';
import { Row, Col, Icon, Breadcrumb } from 'antd';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Author from '../components/Author';
import Ads from '../components/Ads';
import ReactMarkdown from 'react-markdown';
import MDNav from 'markdown-navbar';

import 'markdown-navbar/dist/navbar.css';
import './detail.scss';

const Detail = () => {
  let markdown =
    '## p01:课程介绍和环境搭建\n' +
    '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
    '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
    '**这是加粗的文字**\n\n' +
    '*这是倾斜的文字*`\n\n' +
    '***这是斜体加粗的文字***\n\n' +
    '~~这是加删除线的文字~~ \n\n' +
    '`console.log(111)` \n\n' +
    '## p02:来个Hello World 初始Vue3.0\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n' +
    '***\n\n\n' +
    '## p03:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '## p04:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '## p05:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '## p06:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '## p07:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '``` var a=11; ```';

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
              <Breadcrumb.Item>
                <a href="/articleList">文章列表</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>文章标题</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div>
            <div className="article-title">
              文章标题文章标题文章标题文章标题
            </div>
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
              <ReactMarkdown source={markdown} escapeHtml={false} />
            </div>
          </div>
        </Col>
        <Col className="common-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Ads />
            <div className="mdnav-div common-box">
              <div className="tltle">文章目录</div>
              <MDNav
                className="md-category"
                source={markdown}
                ordered={false}
              />
            </div>
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

export default Detail;
