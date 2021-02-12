import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Beranda extends Component {
    render() {
        return (
            <div>
                <div className="beranda">
                    <div className="home">
                        <div className="title">
                            <h1>Rock The Box</h1>
                            <p className="title-sub">Rock Your Creativity Box!</p>
                            <p className="title-p">When creativity and skills blended <br /> to the point of rocking the galaxy</p>
                            <button>
                                <Link to="/karya" className="text-button">GET STARTED</Link>
                            </button>
                        </div>
                        <div>
                            <p>
                                <img className="beranda-img" src={process.env.PUBLIC_URL + "/image/" + "beranda.png"} alt="" />
                            </p>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                </div>
            </div>
        )
    }
}
