import './css/App1.css';
import 'antd/dist/antd.css';

import React, { Component } from 'react';
import TopHeader from './header/TopHeader';
import NavBar from './navbar/NavBar';
import LandingPage from './landing/LandingPage';
import SimpleSlider from './slider/SimpleSlider';
import HomeContent from './homecontent/HomeContent';
import { Col, Divider, Image, Layout, Row } from 'antd';

const { Header, Content, Footer } = Layout;

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <TopHeader />
       
        <NavBar />

        {/* <SimpleSlider/> */}

        <HomeContent/>
        
        {/* <LandingPage/> */}
       
       <Footer className="footer"></Footer>
      </div>
    );
  }
}

export default Home;
