import React, { useState, useEffect } from 'react';
import './style.scss';
import { Row, Col, Icon, Menu } from 'antd';
import Link from 'next/link'
import Router from 'next/router'
import axios from '../../utils/axios'

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
    <div className="header">
      <Row type="flex" justify="space-between" align="middle">
        <Col xs={24} sm={24} md={10} lg={10} xl={10}>
          <span className="logo">HYN</span>
          <span className="headerText">慢慢琢磨一些技术。。。</span>
        </Col>
        <Col xs={0} sm={0} md={14} lg={8} xl={6}>
          <Menu selectedKeys={[selectedKey]} mode="horizontal" className="menuStyle" onClick={handleClick}>
            <Menu.Item key="0">
              <Icon type="appstore" />
              全部文章
            </Menu.Item>
            {
              navArray.map((item) => {
                return (
                  <Menu.Item key={item.id}>
                    <Icon type={item.icon} />
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
