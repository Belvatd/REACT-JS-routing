import React, { Component } from 'react';
import Utama from './Components/Utama';
import { Link } from 'react-router-dom';
import Navbar from './Components/Navbar';
import "./App.css"

export default class App extends Component {
  render() {
    return (
      <div className="grid-container">
        <header>
          <Navbar></Navbar>
          {/* <Link to="/">Beranda</Link>
          <Link to="/tentangsaya">Tentang Saya</Link>
          <Link to="/karya">Karya</Link>
          <Link to="/kontak">Kontak</Link> */}
        </header>
        <hr />
        <main>
          <div className="content">
            <div className="main">
              <Utama />
            </div>
          </div>
        </main>
        <footer>All Right is reserved</footer>
      </div>
    )
  }
}

