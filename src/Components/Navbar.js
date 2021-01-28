import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <ul className="nav">
                            <li>
                                <a className="nav-link active" aria-current="page" href="#"><Link to="/">Beranda</Link></a>
                            </li>
                            <p></p>
                            <li>
                                <a className="nav-link active" href="#"><Link to="/tentangsaya">Tentang Saya</Link></a>
                            </li>
                            <p></p>
                            <li>
                                <a className="nav-link active" href="#"><Link to="/karya">Karya</Link></a>
                            </li>
                            <p></p>
                            <li>
                                <a className="nav-link active" href="#"><Link to="/kontak">Kontak</Link></a>
                            </li>
                            <p></p>
                            <li>
                                <a className="nav-link active" href="#"></a>
                            </li>
                        </ul>
                </nav>
            </div>
        )
    }
}
