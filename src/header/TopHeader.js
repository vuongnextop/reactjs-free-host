import React, { Component } from 'react';
import { Col, Divider, Image, Layout, Row } from 'antd';
import {PhoneOutlined} from '@ant-design/icons';

import avatar from '../images/avatar.jpg'
import "./TopHeader.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'


const { Header, Content, Footer } = Layout;

class TopHeader extends Component {
    render() {
        return (
            <Layout className="layout">
            <Header style={{ padding:0 }} className="header">

                    <Row>
                      <Col xs={1} sm={3} md={3} lg={3} xl={3} xxl={3}>
                          <Image src = {avatar} className = "Avatar" preview = {false} width = {"3.4em"} height = {"3.2em"}></Image>
                      </Col>
                      <Col  xs={3} sm={5} md={11} lg={11} xl={11} xxl={11}>   
                      </Col>
                     <Col xs={20} sm={{span:15, offset:1}} md={{span:8, offset:2}} lg={{span:7, offset:3}} xl={{span:7, offset:3}} xxl={{span:7, offset:3}}>

                          <Row style={{marginLeft:'2em'}}>
                                <a href="tel:+84 94354 6999">
                                    <div className="content-center">
                                        <div className="pulse"> <FontAwesomeIcon icon={faPhone} color="black"/></div>
                                    </div>
                                </a>

                                <Col style = {{color:"white", fontSize: "1rem"}} >
                                    <label> Mr.Cong: +84 94354 6999</label>
                                </Col>
                            </Row>
                        
                     </Col>
                  </Row>

            </Header>
            <Footer style={{ textAlign: 'center' }}>Đồ đồng, Thiết bị điện cao hạ thế</Footer>
  </Layout>
        );
    }
}

export default TopHeader;