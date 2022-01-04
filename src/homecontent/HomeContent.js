import Slider from "@ant-design/react-slick";
import { Alert } from "antd";
import React from "react";
import "./HomeContent.css"

class HomeContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [{ type: "Product Type 1", backgroundColor: "blue" },
            { type: "Product Type 2", backgroundColor: "green" },
            { type: "Product Type 3", backgroundColor: "red" },
            { type: "Product Type 4", backgroundColor: "yellow" }]
        }
    }
    render() {
        var settings = {
            dots: true,
            infinite: true,
            slidesToShow: 4,
            // arrows: false,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true,
            padding: "1em",
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        };
        return (
            <div style={{ padding: '0 50px' }}>
                <div className="Home-Content">

                    {
                        this.state.data.map((photo) => {
                            return (
                                <div className ="contentSlide">
                                    <Alert message={photo.type} style={{ marginBottom: "2vw", fontWeight: "bold" }}></Alert>
                                    <Slider {...settings} style={{ marginBottom: "5vh" }} >
                                        <div>
                                            <h3 style={{ backgroundColor: photo.backgroundColor}}>1</h3>
                                        </div>
                                        <div>
                                            <h3 style={{ backgroundColor: photo.backgroundColor}}>2</h3>
                                        </div>
                                        <div>
                                            <h3 style={{ backgroundColor: photo.backgroundColor}}>3</h3>
                                        </div>
                                        <div>
                                            <h3 style={{ backgroundColor: photo.backgroundColor}}>4</h3>
                                        </div>
                                    </Slider>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        )
    }
}

export default HomeContent;