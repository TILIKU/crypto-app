import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons'

import icon from "../images/cryptocurrency.png"
const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className='logo-container'>
            <Avatar src={icon} size='large'/>
            <Typography.Title level={2}  className="logo">
                <Link to="/">Cryptoverse</Link>
            </Typography.Title>
            <Menu theme='dark'>
                <Menu.item icon={<HomeOutlined />}>
                    <Link to="/">Home</Link>
                </Menu.item>
                <Menu.item icon={<FundOutlined />}>
                    <Link to="/cryptocurrencies">cryptocurrencies</Link>
                </Menu.item>
                <Menu.item icon={<MoneyCollectOutlined />}>
                    <Link to="/exchanges">exchanges</Link>
                </Menu.item>
                <Menu.item icon={<BulbOutlined />}>
                    <Link to="/news">news</Link>
                </Menu.item>
            </Menu>
        </div>
    </div>
  )
}

export default Navbar;
