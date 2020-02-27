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
        <Col xs={22} sm={22} md={18} lg={15} xl={16}>
          <span className="logo">HYN</span>
          <span className="headerText">慢慢琢磨一些技术。。。</span>
        </Col>
        <Col xs={2} sm={2} md={6} lg={9} xl={8}>
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
