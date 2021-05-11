import React, { useState, useEffect } from 'react';
import style from './style.module.scss';
import { Row, Col, Menu } from 'antd';
import { AppstoreOutlined,BugOutlined, BookOutlined,WechatOutlined } from '@ant-design/icons';

import Router from 'next/router'
import axios from '../../utils/axios'

const getIcon = (key) => {
  const hashMap = {
    'bug': <BugOutlined />,
    'book': <BookOutlined />,
    'wechat': <WechatOutlined />,
  }
  return hashMap[key]
}

const Header = () => {
  const [navArray, setNavArray] = useState([])
  const [selectedKey, setSelectedKey] = useState(0)
  const getNavArray = () => {
    return new Promise((resolve, reject) => {
      axios.get('/client/articleType').then(res => {
        resolve(res.data.data)
      })
    })
  }

  useEffect(() => {
    getNavArray().then(newNavArray => {
      setNavArray(newNavArray)
    })
  }, [])

  const handleClick = (e) => {
    console.log(e)
    if (e.key == 0) {
      setSelectedKey(e.key)
      Router.push('/')
    } else {
      setSelectedKey(e.key)
      Router.push(`/articleList?typeId=${e.key}`)
    }
  }

  return (
    <div className={style.header}>
      <Row type="flex" justify="space-between" align="middle">
        <Col xs={22} sm={22} md={18} lg={15} xl={16}>
          <span className={style.logo}>HYN</span>
          <span className={style.headerText}>慢慢琢磨一些技术。。。</span>
        </Col>
        <Col xs={2} sm={2} md={6} lg={9} xl={8}>
          <Menu selectedKeys={[selectedKey]} mode="horizontal" className={style.menuStyle} onClick={handleClick}>
            <Menu.Item key="0">
            <AppstoreOutlined />
              全部文章
            </Menu.Item>
            {
              navArray.map((item) => {
                return (
                  <Menu.Item key={item.id}>
                    {getIcon(item.icon)}
                    {item.typeName}
                  </Menu.Item>
                )
              })
            }
          </Menu>
        </Col>
      </Row>
    </div>
  );
}

export default Header;
