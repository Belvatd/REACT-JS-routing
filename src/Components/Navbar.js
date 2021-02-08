import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><Link className="logo" to={this.props.link1}>
                            <img src={process.env.PUBLIC_URL + "/image/" + this.props.image}
                                className="logo" alt="logo" width="80" /></Link></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="nav">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <p></p>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#"><Link className="nav-button" to={this.props.link1}>{this.props.page1}</Link></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#"><Link className="nav-button" to={this.props.link2}>{this.props.page2}</Link></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#"><Link className="nav-button" to={this.props.link3}>{this.props.page3}</Link></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#"><Link className="nav-button" to={this.props.link4}>{this.props.page4}</Link></a>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </div>

                </nav>
            </div>
        )
    }
}
