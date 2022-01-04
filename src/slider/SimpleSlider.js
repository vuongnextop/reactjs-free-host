import React, { Component } from "react";
import Slider from "react-slick";
import "./../../node_modules/slick-carousel/slick/slick.css"
import "./../../node_modules/slick-carousel/slick/slick-theme.css";
import "./../css/SimpleSlider.css"
import { Col, Divider, Image, Layout, Row } from 'antd';


import landingPage1 from "../images/landingImage1.jpg"
import landingPage2 from "../images/landingImage2.jpg"
import landingPage3 from "../images/landingImage3.jfif"
import landingPage4 from "../images/landingImage4.jpg"
import landingPage5 from "../images/landingImage5.jpg"


class SimpleSlider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [landingPage1,landingPage2,landingPage3,landingPage4,landingPage5]
            // data: [
            //     {
            //         url: "../images/landingImage1.jpg"
            //     }
            // ]
        }
    }
    componentDidMount() {
        console.log(this.state.data)
    }

    render() {
        console.log("render run")
        const settings = {
            dots: true,
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoSpeed: 1000
        };
        return (
            <div>
                <Slider {...settings} style={{marginBottom:"5vh"}}>

                    {
                        this.state.data.map((photo) => {
                            return(
                                <div key={photo}>
                                    <Image src={photo} width="100%" preview={false} height="70vh"></Image>
                                </div>
                            )
                        })
                    }

                </Slider>
            </div>
        );
    }
}
export default SimpleSlider;