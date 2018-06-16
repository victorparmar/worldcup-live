import React from "react";

class Navbar extends React.Component {
  state = {
    isNavbarActive: false
  };

  handleNavbarMenuClick = e => {
    e.preventDefault();
    this.setState({
      isNavbarActive: !this.state.isNavbarActive
    });
  };

  render() {
    return (
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
              onClick={this.handleNavbarMenuClick}
            >
              <span />
              <span />
              <span />
            </span>
          </div>
          <div
            id="navbarMenuHeroB"
            className={
              "navbar-menu " + (this.state.isNavbarActive ? "is-active" : "")
            }
          >
            <div className="navbar-end">
              <span className="navbar-item">
                <a
                  className="button is-info is-inverted"
                  href="https://github.com/victorparmar/worldcup-live"
                >
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
    );
  }
}

export default Navbar;
