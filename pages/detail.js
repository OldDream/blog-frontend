import React, { useState } from 'react';
import Head from 'next/head';
import { Row, Col, Icon, Breadcrumb } from 'antd';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Author from '../components/Author';
import Ads from '../components/Ads';
import MDNav from 'markdown-navbar';
import axios from '../utils/axios';
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css';
import 'markdown-navbar/dist/navbar.css';
import './detail.scss';

const Detail = (detail) => {
  const [article, setArticle] = useState(detail.data);

  // markedown 渲染
  const renderer = new marked.Renderer();
  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false, // 忽略html
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    }
  });
  
  let markdownHtml = marked(article.content)

  return (
    <div>
      <Head>
        <title>HYN's Blog - {article.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Row className="common-main" type="flex" justify="center">
        <Col className="common-left" xs={24} sm={24} md={18} lg={18} xl={14}>
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
            <div className="content-div" dangerouslySetInnerHTML={{__html: markdownHtml}}>
              
            </div>
          </div>
        </Col>
        <Col className="common-right" xs={0} sm={0} md={6} lg={6} xl={5}>
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
      resolve(res.data);
    });
  });
};

// nexjs getInitialProps 专属生命周期
Detail.getInitialProps = async (ctx) => {
  return await getDetail(ctx);
};

export default Detail;
