import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';
import VideoBackground from './VideoCover'

export default class Home extends Component {
    render() {
        return (
            <div>
            <div>
                <VideoBackground />
                <div className="hero-text">
                    <img src="http://redbridgesoft.com/asset/images/common/bi.png" id="bi_ico" alt="" />
                    <br />Creation, Innovation, Transition
                </div>
            </div>
            <div style={{ background: '#FFFFFF', padding: '30px' }}>
                <Row gutter={16}>
                <Col md={8}>
                    <Card
                    title="Games"
                    extra={<a href="#">More</a>}
                    hoverable
                    cover={
                        <img
                        alt="example"
                        src="http://redbridgesoft.com/asset/images/main/ico_game.png"
                        style={{width: '50px', margin: '30px auto'}}
                        />
                    }
                    >
                    Mobile Games Development Service
                    </Card>
                </Col>
                <Col md={8}>
                    <Card
                    title="Web"
                    extra={<a href="#">More</a>}
                    hoverable
                    cover={
                        <img
                        alt="example"
                        src="http://redbridgesoft.com/asset/images/main/ico_web.png"
                        style={{width: '50px', margin: '30px auto'}}
                        />
                    }
                    >
                    Web Design Development Service
                    </Card>
                </Col>
                <Col md={8}>
                    <Card
                    title="Education"
                    extra={<a href="#">More</a>}
                    hoverable
                    cover={
                        <img
                        alt="example"
                        src="http://redbridgesoft.com/asset/images/main/ico_edu.png"
                        style={{width: '50px', margin: '30px auto'}}
                        />
                    }
                    >
                    CANADA “Central College”
                    </Card>
                </Col>
                </Row>
            </div>
            </div>
        );
    }
}