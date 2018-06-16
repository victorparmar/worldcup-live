import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <section className="hero is-info is-fullheight">
          <div className="hero-head">
            <nav className="navbar">
              <div className="container">
                <div className="navbar-brand">
                  <a className="navbar-item">
                    <img
                      src="https://bulma.io/images/bulma-type-white.png"
                      alt="Logo"
                    />
                  </a>
                  <span
                    className="navbar-burger burger"
                    data-target="navbarMenuHeroB"
                  >
                    <span />
                    <span />
                    <span />
                  </span>
                </div>
                <div id="navbarMenuHeroB" className="navbar-menu">
                  <div className="navbar-end">
                    <a className="navbar-item is-active">Home</a>
                    <a className="navbar-item">Examples</a>
                    <a className="navbar-item">Documentation</a>
                    <span className="navbar-item">
                      <a className="button is-info is-inverted">
                        <span className="icon">
                          <i className="fab fa-github" />
                        </span>
                        <span>Github</span>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </nav>
          </div>

          <div className="hero-body">
            <div className="container has-text-centered">
              <p className="title">Title</p>
              <p className="subtitle">Subtitle</p>
            </div>
          </div>

          <div className="hero-foot">
            <nav className="tabs is-boxed is-fullwidth">
              <div className="container">
                <ul>
                  <li className="is-active">
                    <a>Overview</a>
                  </li>
                  <li>
                    <a>Modifiers</a>
                  </li>
                  <li>
                    <a>Grid</a>
                  </li>
                  <li>
                    <a>Elements</a>
                  </li>
                  <li>
                    <a>Components</a>
                  </li>
                  <li>
                    <a>Layout</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
