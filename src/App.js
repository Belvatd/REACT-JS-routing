import React, { Component } from 'react';
import Utama from './Components/Utama';
import Navbar from './Components/Navbar';
import "./App.css"

export default class App extends Component {
  render() {
    return (
      <div className="grid-container">
        <header>
          <Navbar page1="Home" page2="About Me" page3="Work" page4="Contact"
            link1="/" link2="/tentangsaya" link3="/karya" link4="/kontak"
            image="logo RTB.png">
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
        <footer><p><br /><center>All Right is reserved</center></p></footer>
      </div>
    )
  }
}

