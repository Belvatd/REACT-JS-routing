import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default class Karya extends Component {
    render() {
        return (
            <div className="karya-bg">
                <div className="brandideas">
                        <div>
                            <p>
                                <img className="ttgsaya-img" src={process.env.PUBLIC_URL + "/image/" + "brand.png"} alt="" />
                            </p>
                        </div>
                        <div className="title-ttgsaya">
                            <h1>Branding Ideas!</h1>
                            <p className="title-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Cupiditate corporis impedit illum, eos sit esse laboriosam, <br/> aliquid, repellat est nisi provident ratione accusamus. <br/> Quibusdam temporibus consequuntur maiores ab quia omnis?
                            </p>
                        </div>
                    </div>
                    <center><h2 className="karya-title">UI/UX Design</h2></center>
                <div className="karya"> 
                    <div>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="karya-carousel"
                                    src={process.env.PUBLIC_URL + "/image/" + "upaboga.png"}
                                    alt="UPABOGA"
                                />
                                <Carousel.Caption>
                                    <h3>Upaboga App</h3>
                                    <p>Illustrate the user interface of UPABOGA for BIONIX Competition 2020.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="karya-carousel"
                                    src={process.env.PUBLIC_URL + "/image/" + "belanjain.png"}
                                    alt="Belanjain"
                                />

                                <Carousel.Caption>
                                    <h3>Belanjain App</h3>
                                    <p>Illustrate the user interface of BELANJAIN for DigiSocial Innovator Competition 2020.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="karya-carousel"
                                    src={process.env.PUBLIC_URL + "/image/" + "sehatable.png"}
                                    alt="Sehatable"
                                />

                                <Carousel.Caption>
                                    <h3>Sehatable Web App</h3>
                                    <p>Illustrate the user interface of SEHATABLE for UBAYA Business Plan Competition 2020.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="karya-carousel"
                                    src={process.env.PUBLIC_URL + "/image/" + "inspirit.png"}
                                    alt="Inspirit"
                                />
                                <Carousel.Caption>
                                    <h3>Inspirit Magazine App</h3>
                                    <p>Illustrate the user interface of INSPIRIT for MADIG Competition 2020.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                        <br/><br/><br/>
                    </div>
                </div>
            </div>
        )
    }
}
