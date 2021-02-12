import React, { Component } from 'react'

export default class TentangSaya extends Component {
    render() {
        return (
            <div>
                <div className="bgaboutme">
                    <div className="aboutme">
                        <div>
                            <p>
                                <img className="ttgsaya-img" src={process.env.PUBLIC_URL + "/image/" + "ttgsaya.png"} alt="" />
                            </p>
                        </div>
                        <div className="title-ttgsaya">
                            <h1>Hi Everybody!</h1>
                            <br/>
                            <h3>So,</h3>
                            <p className="title-p">My name is Belva Talitha and I live in Malang. <br />
                            I am a student of Software Engineering SMK Telkom Malang.<br />
                            I am interested in creating interfaces for mobile or web.<br />
                            I love minimalism as well as try different styles<br/>
                            and stuff to create something new. <br/>
                            </p>
                            <br/>
                            <h3>Also</h3>
                            <p className="title-p">I learn about code and sometimes draw. <br/> 
                            I love cat, music and peace situation.</p>
                        </div>
                    </div>
                </div>
                <br/><br/><br/>
            </div>
        )
    }
}
