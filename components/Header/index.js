import React from 'react';
import './style.scss';
import { Row, Col, Icon, Menu } from 'antd';

const Header = () => (
  <div className="header">
    <Row type="flex" justify="space-between" align="middle">
      <Col xs={24} sm={24} md={10} lg={10} xl={10}>
        <span className="logo">HYN</span>
        <span className="headerText">慢慢琢磨一些技术。。。</span>
      </Col>
      <Col xs={0} sm={0} md={14} lg={8} xl={6}>
        <Menu mode="horizontal" className="menuStyle">
          <Menu.Item key="allArticles">
            <Icon type="appstore" />
            全部文章
          </Menu.Item>

          <Menu.Item key="tech">
            <Icon type="bug" />
            技术
          </Menu.Item>

          <Menu.Item key="learning">
            <Icon type="book" />
            学习
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  </div>
);

export default Header;
