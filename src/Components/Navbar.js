import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul className="nav">
                        <li>
                            <button className="logo"><Link className="logo" to={this.props.link1}>{this.props.logo}</Link></button>
                        </li>
                        <p></p>
                        <p></p>
                        <li>
                            <button className="nav-button"><Link className="nav-button" to={this.props.link1}>{this.props.page1}</Link></button>
                        </li>
                        <p></p>
                        <li>
                            <button className="nav-button"><Link className="nav-button" to={this.props.link2}>{this.props.page2}</Link></button>
                        </li>
                        <p></p>
                        <li>
                            <button className="nav-button"><Link className="nav-button" to={this.props.link3}>{this.props.page3}</Link></button>
                        </li>
                        <p></p>
                        <li>
                            <button className="nav-button"><Link className="nav-button" to={this.props.link4}>{this.props.page4}</Link></button>
                        </li>
                        <p></p>


                    </ul>
                </nav>
            </div>
        )
    }
}
