import '../css/LandingPage.css'
import React, { Component } from 'react';
import { Row, Col, Divider } from 'antd';


class LandingPage extends Component {
    render() {
        return (
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={6}>
                </Col>
                <Col className="gutter-row" span={6}>
                </Col>
                <Col className="gutter-row" span={6}>
                </Col>
                <Col className="gutter-row" span={6}>
                </Col>
            </Row>
        );
    }
}

export default LandingPage;