import React, { Component } from 'react';
import { Col, Menu, Row } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined,DownOutlined } from '@ant-design/icons';
import '../css/Navbar.css'

const { SubMenu } = Menu;

class NavBar extends Component {

    handleClick = (e) => {
        console.log(e);
    }

    render() {
        return (
            <Row className='navbar'>
                <Col span={20} offset={2}>
                    <Menu onClick={this.handleClick} mode="horizontal" style={{ fontSize: "15px" }} theme="light">
                        <Menu.Item key="alipay">
                            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                                Gioi Thieu
                            </a>
                        </Menu.Item>
                        <Menu.Item key="mail" icon={<DownOutlined />}>
                            Lien He
                        </Menu.Item>
                    
                        <SubMenu key="SubMenu" icon={<DownOutlined />} title="San Pham">
                            <Menu.ItemGroup title="Item 1">
                                <Menu.Item key="setting:1">San Pham 1</Menu.Item>
                                <Menu.Item key="setting:2">San Pham 2</Menu.Item>
                            </Menu.ItemGroup>
                            <Menu.ItemGroup title="Item 2">
                                <Menu.Item key="setting:3">San Pham 3</Menu.Item>
                                <Menu.Item key="setting:4">San Pham 4</Menu.Item>
                            </Menu.ItemGroup>
                        </SubMenu>
                    
                    </Menu>
                </Col>
                <Col span={2}></Col>
            </Row>
        );
    }
}

export default NavBar;