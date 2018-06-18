import React from "react";

import EventService, { EventNames } from "../services/EventService";
import AppService from "../services/AppService";

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

  handleRefreshDataClick = async e => {
    e.preventDefault();
    await AppService.refreshData();
  };

  handleRefreshDataInProgress = () => {
    this.setState({
      isRefreshingData: true
    });
  };

  handleRefreshDataDone = () => {
    this.setState({
      isRefreshingData: false
    });
  };

  componentDidMount() {
    EventService.listenEvent(
      EventNames.ON_REFRESH_DATA_REQUEST_IN_PROGRESS,
      "navbar",
      this.handleRefreshDataInProgress
    );
    EventService.listenEvent(
      EventNames.ON_REFRESH_DATA_REQUEST_DONE,
      "navbar",
      this.handleRefreshDataDone
    );
  }

  componentWillUnmount() {
    EventService.unlistenEvent(
      EventNames.ON_REFRESH_DATA_REQUEST_IN_PROGRESS,
      "navbar"
    );
    EventService.unlistenEvent(
      EventNames.ON_REFRESH_DATA_REQUEST_DONE,
      "navbar"
    );
  }

  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item">
              <span className="icon">
                <i className="fas fa-trophy" />
              </span>
              <span>
                <b>World Cup Live 2018</b>
              </span>
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
              {this.props.env === "test" && (
                <span className="navbar-item">
                  <a
                    className="button is-inverted"
                    onClick={this.handleToggleInPlayClick}
                  >
                    <span>Toggle InPlay</span>
                  </a>
                </span>
              )}
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
