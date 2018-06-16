import React from "react";

class Navbar extends React.Component {
  state = {
    isNavbarActive: false,
    isRefreshingData: false
  };

  handleNavbarMenuClick = e => {
    e.preventDefault();
    this.setState({
      isNavbarActive: !this.state.isNavbarActive
    });
  };

  handleToggleInPlayClick = e => {
    e.preventDefault();
    this.props.toggleInPlay();
  };

  handleRefreshDataClick = e => {
    e.preventDefault();
    this.refreshData();
  };

  refreshData = () => {
    console.log("refreshing");

    this.setState({
      isRefreshingData: true
    });

    setTimeout(() => {
      console.log("done");
      this.setState({
        isRefreshingData: false
      });
    }, 1000);
  };

  componentDidMount() {
    this.refreshData();
    this.intervalId = setInterval(() => {
      this.refreshData();
    }, 60000);
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

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
                  className="button is-inverted"
                  onClick={this.handleToggleInPlayClick}
                >
                  <span>Toggle InPlay</span>
                </a>
              </span>
              <span className="navbar-item">
                <a
                  className={
                    "button is-inverted " +
                    (this.state.isRefreshingData ? "is-loading" : "")
                  }
                  onClick={this.handleRefreshDataClick}
                >
                  <span>Refresh Data</span>
                </a>
              </span>
              <span className="navbar-item">
                <a
                  className="button is-inverted"
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
