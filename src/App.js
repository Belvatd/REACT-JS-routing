import React, { Component } from 'react';
import Utama from './Components/Utama';
import Navbar from './Components/Navbar';
import "./App.css"

export default class App extends Component {
  render() {
    return (
      <div className="grid-container">
        <header>
          <Navbar page1="Beranda" page2="Tentang Saya" page3="Karya" page4="Kontak"
            link1="/" link2="/tentangsaya" link3="/karya" link4="/kontak"
            logo="Belva Talitha">
          </Navbar>
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

